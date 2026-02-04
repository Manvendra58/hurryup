import { useI18n } from '../i18n/I18nProvider'

const Hero = () => {
  const { t } = useI18n()
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.welcomeTo')}{' '}
            <span className="text-primary-600">HurryUp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              {t('cta.getStarted')}
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              {t('hero.learnMore')}
            </button>
          </div>
        </div>

        {/* Hero Image/Illustration Placeholder */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl shadow-2xl p-8 md:p-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-white text-6xl mb-4">⚡</div>
              <h3 className="text-white text-2xl font-semibold mb-2">
                {t('hero.lightningFast')}
              </h3>
              <p className="text-white/90">
                {t('hero.lightningFastDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
