import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import Logo from '../../components/Logo'
import { Product, Order } from '../../types'
import { useI18n } from '../../i18n/I18nProvider'

const FarmerDashboard = () => {
  const { user, logout } = useAuth()
  const { lang, setLang, t } = useI18n()
  const [products, setProducts] = useState<Product[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'stats'>('products')
  const [showAddProduct, setShowAddProduct] = useState(false)
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '🥬',
    category: 'vegetables',
    stock: '',
  })

  useEffect(() => {
    loadProducts()
    loadOrders()
  }, [])

  const loadProducts = () => {
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      const allProducts = JSON.parse(savedProducts)
      setProducts(allProducts.filter((p: Product) => p.farmerId === user?.id))
    }
  }

  const loadOrders = () => {
    const savedOrders = localStorage.getItem('orders')
    if (savedOrders) {
      const allOrders = JSON.parse(savedOrders)
      setOrders(allOrders.filter((o: Order) => o.farmerId === user?.id))
    }
  }

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    const savedOrders = localStorage.getItem('orders')
    if (!savedOrders) return

    const allOrders: Order[] = JSON.parse(savedOrders)
    const updatedAll = allOrders.map((o) =>
      o.id === orderId ? { ...o, status } : o
    )

    localStorage.setItem('orders', JSON.stringify(updatedAll))
    // Refresh only this farmer's orders
    setOrders(updatedAll.filter((o) => o.farmerId === user?.id))
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name,
      description: newProduct.description,
      price: parseFloat(newProduct.price),
      image: newProduct.image,
      category: newProduct.category,
      farmerId: user.id,
      farmerName: user.name,
      stock: parseInt(newProduct.stock),
      organic: true,
      approved: false, // Needs admin approval
    }

    const savedProducts = localStorage.getItem('products')
    const allProducts = savedProducts ? JSON.parse(savedProducts) : []
    allProducts.push(product)
    localStorage.setItem('products', JSON.stringify(allProducts))

    setProducts([...products, product])
    setNewProduct({
      name: '',
      description: '',
      price: '',
      image: '🥬',
      category: 'vegetables',
      stock: '',
    })
    setShowAddProduct(false)
    alert('Product added! It will be visible after admin approval.')
  }

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const savedProducts = localStorage.getItem('products')
      if (savedProducts) {
        const allProducts = JSON.parse(savedProducts)
        const updated = allProducts.filter((p: Product) => p.id !== productId)
        localStorage.setItem('products', JSON.stringify(updated))
        setProducts(products.filter(p => p.id !== productId))
      }
    }
  }

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const pendingOrders = orders.filter(o => o.status === 'pending').length

  const productImages = ['🥬', '🥕', '🍅', '🥒', '🌶️', '🧄', '🧅', '🥔', '🌽', '🥦', '🥑', '🍆']

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <span className="text-xl font-bold text-gradient">{t('farmer.portal')}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {lang === 'en' ? 'EN' : 'हिंदी'}
              </button>
              <div className="flex items-center space-x-2">
                {user?.verified ? (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ {t('admin.verifiedFarmers')}
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    ⏳ {t('admin.pendingVerification')}
                  </span>
                )}
              </div>
              <span className="text-gray-700">{t('auth.welcomeUser')} {user?.name}</span>
              <button
                onClick={logout}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                {t('auth.logout')}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-gradient-to-br from-green-50 to-green-100">
            <div className="text-3xl mb-2">📦</div>
            <h3 className="text-2xl font-bold text-gray-900">{products.length}</h3>
            <p className="text-gray-600">{t('farmer.totalProducts')}</p>
          </div>
          <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="text-2xl font-bold text-gray-900">₹{totalRevenue.toFixed(2)}</h3>
            <p className="text-gray-600">{t('farmer.totalRevenue')}</p>
          </div>
          <div className="card bg-gradient-to-br from-yellow-50 to-yellow-100">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="text-2xl font-bold text-gray-900">{pendingOrders}</h3>
            <p className="text-gray-600">{t('farmer.pendingOrders')}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 border-b">
          {(['products', 'orders', 'stats'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'products' ? t('customer.browseProducts') : tab === 'orders' ? t('common.orders') : t('common.statistics')}
            </button>
          ))}
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t('farmer.myProducts')}</h2>
              {user?.verified ? (
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="btn-primary bg-green-600 hover:bg-green-700"
                >
                  {t('farmer.addProduct')}
                </button>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-lg">
                  {t('farmer.waitVerification')}
                </div>
              )}
            </div>

            {showAddProduct && (
              <div className="card mb-6">
                <h3 className="text-xl font-bold mb-4">{t('farmer.addNewProduct')}</h3>
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('farmer.productName')}
                      </label>
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('farmer.category')}
                      </label>
                      <select
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        className="input-field"
                        required
                      >
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="herbs">Herbs</option>
                        <option value="greens">Greens</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('farmer.description')}
                    </label>
                    <textarea
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                      className="input-field"
                      rows={3}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('farmer.pricePerKg')}
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('farmer.stockKg')}
                      </label>
                      <input
                        type="number"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('farmer.icon')}
                      </label>
                      <select
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        className="input-field"
                      >
                        {productImages.map(img => (
                          <option key={img} value={img}>{img}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button type="submit" className="btn-primary bg-green-600 hover:bg-green-700">
                      {t('farmer.addProduct')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddProduct(false)}
                      className="btn-secondary"
                    >
                      {t('common.cancel')}
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{product.image}</div>
                    {product.approved === false && (
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {t('common.pendingApproval')}
                      </span>
                    )}
                    {product.approved === true && (
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        ✓ {t('common.approved')}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                    <span className="text-sm text-gray-500">{t('common.stock')}: {product.stock} kg</span>
                  </div>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="btn-secondary w-full text-red-600 hover:bg-red-50"
                  >
                    {t('common.delete')}
                  </button>
                </div>
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t('farmer.noProductsYet')}</p>
              </div>
            )}
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('common.orders')}</h2>
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">{t('farmer.noOrdersYet')}</p>
                </div>
              ) : (
                orders.map(order => (
                  <div key={order.id} className="card">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">Order #{order.id.slice(-6)}</h3>
                        <p className="text-sm text-gray-500">{t('common.customer')}: {order.customerName}</p>
                        <p className="text-sm text-gray-500">{t('common.date')}: {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        order.status === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                        order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span>{item.product.name} x {item.quantity}</span>
                          <span>₹{(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t">
                      <span className="font-bold text-lg">{t('cart.total')} ₹{order.total.toFixed(2)}</span>
                      <div className="flex flex-wrap gap-2">
                        {order.status === 'pending' && (
                          <button
                            type="button"
                            onClick={() => updateOrderStatus(order.id, 'confirmed')}
                            className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
                          >
                            {t('order.confirm')}
                          </button>
                        )}
                        {order.status !== 'delivered' && order.status !== 'cancelled' && (
                          <button
                            type="button"
                            onClick={() => updateOrderStatus(order.id, 'delivered')}
                            className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold"
                          >
                            {t('order.markDelivered')}
                          </button>
                        )}
                        {order.status === 'pending' && (
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm('Cancel this order?')) {
                                updateOrderStatus(order.id, 'cancelled')
                              }
                            }}
                            className="px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-sm font-semibold border border-red-200"
                          >
                            {t('order.cancel')}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('common.statistics')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="font-semibold text-lg mb-4">{t('farmer.salesOverview')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('common.totalOrders')}</span>
                    <span className="font-semibold">{orders.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('farmer.totalRevenue')}</span>
                    <span className="font-semibold">₹{totalRevenue.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('farmer.averageOrderValue')}</span>
                    <span className="font-semibold">
                      ₹{orders.length > 0 ? (totalRevenue / orders.length).toFixed(2) : '0.00'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="font-semibold text-lg mb-4">{t('farmer.productStatus')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('farmer.totalProducts')}</span>
                    <span className="font-semibold">{products.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('common.approvedProducts')}</span>
                    <span className="font-semibold">
                      {products.filter(p => p.approved === true).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('common.pendingApproval')}</span>
                    <span className="font-semibold">
                      {products.filter(p => p.approved === false).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FarmerDashboard
