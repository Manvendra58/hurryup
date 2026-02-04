import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import ProductCard from '../../components/ProductCard'
import Logo from '../../components/Logo'
import { Product, CartItem, Order } from '../../types'
import { useI18n } from '../../i18n/I18nProvider'

const CustomerDashboard = () => {
  const { user, logout } = useAuth()
  const { lang, setLang, t } = useI18n()
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showCart, setShowCart] = useState(false)

  const categories = ['all', 'vegetables', 'fruits', 'herbs', 'greens']

  useEffect(() => {
    // Load products from localStorage
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      const allProducts = JSON.parse(savedProducts)
      // Only show approved products
      setProducts(allProducts.filter((p: Product) => p.approved !== false))
    } else {
      // Sample products
      const sampleProducts: Product[] = [
        {
          id: '1',
          name: 'Fresh Tomatoes',
          description: 'Organic, locally grown tomatoes',
          price: 3.99,
          image: '🍅',
          category: 'vegetables',
          farmerId: 'f1',
          farmerName: 'Green Valley Farm',
          stock: 50,
          organic: true,
          approved: true,
        },
        {
          id: '2',
          name: 'Organic Carrots',
          description: 'Sweet and crunchy organic carrots',
          price: 2.99,
          image: '🥕',
          category: 'vegetables',
          farmerId: 'f2',
          farmerName: 'Sunshine Farm',
          stock: 30,
          organic: true,
          approved: true,
        },
        {
          id: '3',
          name: 'Fresh Lettuce',
          description: 'Crisp organic lettuce leaves',
          price: 4.99,
          image: '🥬',
          category: 'greens',
          farmerId: 'f1',
          farmerName: 'Green Valley Farm',
          stock: 25,
          organic: true,
          approved: true,
        },
      ]
      setProducts(sampleProducts)
      localStorage.setItem('products', JSON.stringify(sampleProducts))
    }
  }, [])

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (product: Product) => {
    if (product.stock === 0) return

    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        if (existing.quantity >= product.stock) return prev
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev =>
      prev.map(item => {
        if (item.product.id === productId) {
          const newQuantity = item.quantity + delta
          if (newQuantity <= 0) return null
          if (newQuantity > item.product.stock) return item
          return { ...item, quantity: newQuantity }
        }
        return item
      }).filter(Boolean) as CartItem[]
    )
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId))
  }

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const handleCheckout = () => {
    if (cart.length === 0) return
    if (!user) {
      alert('Please login again to place your order.')
      return
    }

    // Load existing orders
    const savedOrders = localStorage.getItem('orders')
    const allOrders: Order[] = savedOrders ? JSON.parse(savedOrders) : []

    // Group cart items by farmer so each farmer gets their own order
    const byFarmer: Record<
      string,
      {
        farmerName: string
        items: CartItem[]
        total: number
      }
    > = {}

    cart.forEach((item) => {
      const farmerId = item.product.farmerId
      if (!byFarmer[farmerId]) {
        byFarmer[farmerId] = {
          farmerName: item.product.farmerName,
          items: [],
          total: 0,
        }
      }
      byFarmer[farmerId].items.push(item)
      byFarmer[farmerId].total += item.product.price * item.quantity
    })

    const now = new Date().toISOString()
    Object.entries(byFarmer).forEach(([farmerId, group], index) => {
      const order: Order = {
        id: `${Date.now()}-${index}`,
        customerId: user.id,
        customerName: user.name,
        farmerId,
        farmerName: group.farmerName,
        items: group.items,
        total: Number(group.total.toFixed(2)),
        status: 'pending',
        date: now,
      }
      allOrders.push(order)
    })

    localStorage.setItem('orders', JSON.stringify(allOrders))

    // Decrease stock for purchased products in localStorage
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      const allProducts: Product[] = JSON.parse(savedProducts)
      const updatedProducts = allProducts.map((p) => {
        const cartItem = cart.find((ci) => ci.product.id === p.id)
        if (!cartItem) return p
        const newStock = Math.max(0, p.stock - cartItem.quantity)
        return { ...p, stock: newStock }
      })
      localStorage.setItem('products', JSON.stringify(updatedProducts))
      // Update local state so UI reflects new stock
      setProducts(updatedProducts.filter((p) => p.approved !== false))
    }

    alert(`Order placed! Total: ₹${total.toFixed(2)}\n\nFarmers can now see your order in their dashboard.`)
    setCart([])
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {lang === 'en' ? 'EN' : 'हिंदी'}
              </button>
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-3 hover:bg-green-50 rounded-xl transition-all duration-200 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">🛒</span>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                    {cart.length}
                  </span>
                )}
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Welcome, <span className="text-green-600 font-semibold">{user?.name}</span></span>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-red-600 font-medium text-sm px-3 py-1 rounded-lg hover:bg-red-50 transition-all"
                >
                  {t('auth.logout')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className={`flex-1 ${showCart ? 'lg:w-2/3' : 'w-full'}`}>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('customer.browseProducts')}</h1>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-green-50 hover:border-green-200 border-2 border-transparent shadow-md hover:shadow-lg'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>

          {/* Cart Sidebar */}
          {showCart && (
            <div className="lg:w-1/3">
              <div className="card sticky top-20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{t('cart.shoppingCart')}</h2>
                  <button
                    onClick={() => setShowCart(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <span className="text-6xl mb-4 block">🛒</span>
                    <p className="text-gray-500">{t('cart.empty')}</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                      {cart.map(item => (
                        <div key={item.product.id} className="flex items-center space-x-4 pb-4 border-b">
                          <div className="text-4xl">{item.product.image}</div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{item.product.name}</h4>
                            <p className="text-sm text-gray-500">₹{item.product.price}/kg</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-gray-900">{t('cart.total')}</span>
                        <span className="text-2xl font-bold text-green-600">₹{total.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={handleCheckout}
                        className="btn-primary bg-green-600 hover:bg-green-700 w-full"
                      >
                        {t('cart.checkout')}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard
