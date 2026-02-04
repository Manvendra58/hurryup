import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { useI18n } from '../i18n/I18nProvider'

const LandingPage = () => {
  const { lang, setLang, t } = useI18n()

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-green-100">
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
              <Link to="/login" className="text-gray-700 hover:text-green-600 font-semibold transition-colors duration-200">
                {t('auth.login')}
              </Link>
              <Link to="/register" className="btn-primary">
                {t('cta.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full">
            <span className="text-green-700 font-semibold text-sm">{t('landing.organicFresh')}</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t('landing.titleLine1')}
            <span className="text-gradient block mt-2">{t('landing.titleLine2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('landing.subtitle1')}
            <span className="block mt-2 text-green-700 font-medium">{t('landing.subtitle2')}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=customer" className="btn-primary text-lg px-8 py-4">
              {t('cta.startShopping')}
            </Link>
            <Link to="/register?role=farmer" className="btn-secondary text-lg px-8 py-4">
              {t('cta.becomeSeller')}
            </Link>
          </div>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          {/* Customer Card */}
          <Link to="/register?role=customer" className="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-green-50/50">
            <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">🛒</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">{t('landing.customerCardTitle')}</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              {t('landing.customerCardDesc')}
            </p>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.customerBullet1')}</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.customerBullet2')}</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.customerBullet3')}</span>
              </li>
            </ul>
            <button className="btn-primary w-full">
              {t('cta.shopNow')}
            </button>
          </Link>

          {/* Farmer Card */}
          <Link to="/register?role=farmer" className="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-emerald-50/50">
            <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">👨‍🌾</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">{t('landing.farmerCardTitle')}</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              {t('landing.farmerCardDesc')}
            </p>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.farmerBullet1')}</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.farmerBullet2')}</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.farmerBullet3')}</span>
              </li>
            </ul>
            <button className="btn-primary w-full">
              {t('cta.startSelling')}
            </button>
          </Link>

          {/* Admin Card */}
          <Link to="/register?role=admin" className="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-teal-50/50">
            <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">👨‍💼</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">{t('landing.adminCardTitle')}</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              {t('landing.adminCardDesc')}
            </p>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.adminBullet1')}</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.adminBullet2')}</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>{t('landing.adminBullet3')}</span>
              </li>
            </ul>
            <button className="btn-primary w-full">
              {t('cta.adminPortal')}
            </button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">🌿</div>
            <h4 className="font-bold text-xl mb-3 text-gray-900">{t('landing.featureOrganicTitle')}</h4>
            <p className="text-gray-600">{t('landing.featureOrganicDesc')}</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">🚚</div>
            <h4 className="font-bold text-xl mb-3 text-gray-900">{t('landing.featureDeliveryTitle')}</h4>
            <p className="text-gray-600">{t('landing.featureDeliveryDesc')}</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">💚</div>
            <h4 className="font-bold text-xl mb-3 text-gray-900">{t('landing.featureSupportTitle')}</h4>
            <p className="text-gray-600">{t('landing.featureSupportDesc')}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 mt-32 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Logo size="sm" />
            <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} HurryUp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
