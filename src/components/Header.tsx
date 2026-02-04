import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, t } = useI18n()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">HurryUp</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t('nav.home')}
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t('nav.features')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t('nav.contact')}
            </a>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'EN' : 'हिंदी'}
              </button>
              <button className="btn-primary">{t('cta.getStarted')}</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </a>
            <a
              href="#features"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.features')}
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 flex-1"
              >
                {lang === 'en' ? 'EN' : 'हिंदी'}
              </button>
              <button className="btn-primary flex-1">{t('cta.getStarted')}</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
