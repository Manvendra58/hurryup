import { useState } from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const emojiSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {imageError ? (
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg`}>
          <span className={`text-white ${emojiSizes[size]}`}>🌱</span>
        </div>
      ) : (
        <div className={`${sizeClasses[size]} rounded-xl overflow-hidden shadow-lg ring-2 ring-green-100 bg-white p-1`}>
          <img
            src="/logo.png"
            alt="HurryUp Logo"
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent ${textSizes[size]} tracking-tight`}>
          HurryUp
        </span>
      )}
    </div>
  )
}

export default Logo
