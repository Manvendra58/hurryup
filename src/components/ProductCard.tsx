import { Product } from '../types'
import { useI18n } from '../i18n/I18nProvider'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
  showFarmer?: boolean
}

const ProductCard = ({ product, onAddToCart, showFarmer = true }: ProductCardProps) => {
  const { t } = useI18n()
  return (
    <div className="card group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-green-50/30">
      <div className="relative mb-5">
        <div className="aspect-square bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner group-hover:shadow-lg transition-shadow">
          <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">{product.image}</span>
        </div>
        {product.organic && (
          <span className="absolute top-3 right-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
            <span>🌿</span>
            <span>ORGANIC</span>
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
      
      {showFarmer && (
        <p className="text-sm text-gray-500 mb-4 flex items-center">
          <span className="mr-2">👨‍🌾</span>
          <span>By: <span className="font-semibold text-gray-700">{product.farmerName}</span></span>
        </p>
      )}
      
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
        <div>
          <span className="text-3xl font-extrabold text-gradient">₹{product.price}</span>
          <span className="text-gray-500 text-sm ml-1">/kg</span>
        </div>
        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          📦 {product.stock} kg
        </span>
      </div>
      
      {onAddToCart && (
        <div className="flex gap-2">
          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="btn-secondary flex-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {product.stock > 0 ? t('product.addToCart') : t('product.outOfStock')}
          </button>
          <button
            onClick={() => {
              onAddToCart(product)
              alert(`Added ${product.name} to cart! Proceed to checkout.`)
            }}
            disabled={product.stock === 0}
            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {product.stock > 0 ? t('product.buyNow') : t('product.outOfStock')}
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductCard
