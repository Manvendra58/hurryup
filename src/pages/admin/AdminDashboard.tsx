import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import Logo from '../../components/Logo'
import { Product } from '../../types'
import { User } from '../../context/AuthContext'
import { useI18n } from '../../i18n/I18nProvider'

const AdminDashboard = () => {
  const { user, logout } = useAuth()
  const { lang, setLang, t } = useI18n()
  const [farmers, setFarmers] = useState<(User & { password?: string })[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [activeTab, setActiveTab] = useState<'farmers' | 'products' | 'stats'>('farmers')

  useEffect(() => {
    loadFarmers()
    loadProducts()
  }, [])

  const loadFarmers = () => {
    const savedUsers = localStorage.getItem('users')
    if (savedUsers) {
      const allUsers = JSON.parse(savedUsers)
      setFarmers(allUsers.filter((u: User & { password?: string }) => u.role === 'farmer'))
    }
  }

  const loadProducts = () => {
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
  }

  const verifyFarmer = (farmerId: string, verified: boolean) => {
    const savedUsers = localStorage.getItem('users')
    if (savedUsers) {
      const allUsers = JSON.parse(savedUsers)
      const updated = allUsers.map((u: User & { password?: string }) =>
        u.id === farmerId ? { ...u, verified } : u
      )
      localStorage.setItem('users', JSON.stringify(updated))
      setFarmers(updated.filter((u: User & { password?: string }) => u.role === 'farmer'))
    }
  }

  const approveProduct = (productId: string, approved: boolean) => {
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      const allProducts = JSON.parse(savedProducts)
      const updated = allProducts.map((p: Product) =>
        p.id === productId ? { ...p, approved } : p
      )
      localStorage.setItem('products', JSON.stringify(updated))
      setProducts(updated)
    }
  }

  const pendingFarmers = farmers.filter(f => !f.verified)
  const verifiedFarmers = farmers.filter(f => f.verified)
  const pendingProducts = products.filter(p => p.approved === false)
  const approvedProducts = products.filter(p => p.approved === true)

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <span className="text-xl font-bold text-gradient">{t('admin.portal')}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {lang === 'en' ? 'EN' : 'हिंदी'}
              </button>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-3xl mb-2">👨‍🌾</div>
            <h3 className="text-2xl font-bold text-gray-900">{farmers.length}</h3>
            <p className="text-gray-600">{t('admin.totalFarmers')}</p>
          </div>
          <div className="card bg-gradient-to-br from-yellow-50 to-yellow-100">
            <div className="text-3xl mb-2">⏳</div>
            <h3 className="text-2xl font-bold text-gray-900">{pendingFarmers.length}</h3>
            <p className="text-gray-600">{t('admin.pendingVerification')}</p>
          </div>
          <div className="card bg-gradient-to-br from-green-50 to-green-100">
            <div className="text-3xl mb-2">✓</div>
            <h3 className="text-2xl font-bold text-gray-900">{verifiedFarmers.length}</h3>
            <p className="text-gray-600">{t('admin.verifiedFarmers')}</p>
          </div>
          <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="text-3xl mb-2">📦</div>
            <h3 className="text-2xl font-bold text-gray-900">{pendingProducts.length}</h3>
            <p className="text-gray-600">{t('admin.pendingProducts')}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 border-b">
          {(['farmers', 'products', 'stats'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'farmers' ? t('role.farmer') : tab === 'products' ? t('customer.browseProducts') : t('common.statistics')}
            </button>
          ))}
        </div>

        {/* Farmers Tab */}
        {activeTab === 'farmers' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('admin.farmerManagement')}</h2>

            {/* Pending Farmers */}
            {pendingFarmers.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm mr-2">
                    Pending Verification ({pendingFarmers.length})
                  </span>
                </h3>
                <div className="space-y-4">
                  {pendingFarmers.map(farmer => (
                    <div key={farmer.id} className="card border-l-4 border-yellow-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg">{farmer.name}</h4>
                          <p className="text-gray-600 text-sm mt-1">{farmer.email}</p>
                          <p className="text-gray-500 text-xs mt-2">ID: {farmer.id}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => verifyFarmer(farmer.id, true)}
                            className="btn-primary bg-green-600 hover:bg-green-700"
                          >
                            {t('admin.verify')}
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Are you sure you want to reject this farmer?')) {
                                verifyFarmer(farmer.id, false)
                              }
                            }}
                            className="btn-secondary bg-red-100 text-red-700 hover:bg-red-200"
                          >
                            {t('admin.reject')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verified Farmers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mr-2">
                  Verified Farmers ({verifiedFarmers.length})
                </span>
              </h3>
              {verifiedFarmers.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">{t('admin.noVerifiedFarmers')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {verifiedFarmers.map(farmer => (
                    <div key={farmer.id} className="card border-l-4 border-green-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{farmer.name}</h4>
                          <p className="text-gray-600 text-sm mt-1">{farmer.email}</p>
                          <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                            ✓ Verified
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            if (confirm('Revoke verification for this farmer?')) {
                              verifyFarmer(farmer.id, false)
                            }
                          }}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          {t('admin.revoke')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('admin.productManagement')}</h2>

            {/* Pending Products */}
            {pendingProducts.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm mr-2">
                    {t('common.pendingApproval')} ({pendingProducts.length})
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pendingProducts.map(product => (
                    <div key={product.id} className="card border-l-4 border-yellow-500">
                      <div className="text-5xl mb-3">{product.image}</div>
                      <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                        <span className="text-sm text-gray-500">Stock: {product.stock} kg</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-4">
                        By: <span className="font-medium">{product.farmerName}</span>
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => approveProduct(product.id, true)}
                          className="btn-primary bg-green-600 hover:bg-green-700 flex-1"
                        >
                          {t('admin.approve')}
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('Reject this product?')) {
                              approveProduct(product.id, false)
                            }
                          }}
                          className="btn-secondary bg-red-100 text-red-700 hover:bg-red-200 flex-1"
                        >
                          {t('admin.reject')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Approved Products */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mr-2">
                  {t('common.approvedProducts')} ({approvedProducts.length})
                </span>
              </h3>
              {approvedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">{t('admin.noApprovedProducts')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approvedProducts.map(product => (
                    <div key={product.id} className="card border-l-4 border-green-500">
                      <div className="text-5xl mb-3">{product.image}</div>
                      <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                        <span className="text-sm text-gray-500">Stock: {product.stock} kg</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-4">
                        By: <span className="font-medium">{product.farmerName}</span>
                      </p>
                      <button
                        onClick={() => {
                          if (confirm('Revoke approval for this product?')) {
                            approveProduct(product.id, false)
                          }
                        }}
                        className="btn-secondary bg-red-100 text-red-700 hover:bg-red-200 w-full"
                      >
                        {t('admin.revokeApproval')}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('admin.platformStatistics')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="font-semibold text-lg mb-4">{t('admin.farmerStatistics')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('admin.totalFarmers')}</span>
                    <span className="font-semibold">{farmers.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('admin.verifiedFarmers')}</span>
                    <span className="font-semibold text-green-600">{verifiedFarmers.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('admin.pendingVerification')}</span>
                    <span className="font-semibold text-yellow-600">{pendingFarmers.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verification Rate</span>
                    <span className="font-semibold">
                      {farmers.length > 0
                        ? ((verifiedFarmers.length / farmers.length) * 100).toFixed(1)
                        : '0'}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="font-semibold text-lg mb-4">{t('admin.productStatistics')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('farmer.totalProducts')}</span>
                    <span className="font-semibold">{products.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('common.approvedProducts')}</span>
                    <span className="font-semibold text-green-600">{approvedProducts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('common.pendingApproval')}</span>
                    <span className="font-semibold text-yellow-600">{pendingProducts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('common.approvalRate')}</span>
                    <span className="font-semibold">
                      {products.length > 0
                        ? ((approvedProducts.length / products.length) * 100).toFixed(1)
                        : '0'}%
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

export default AdminDashboard
