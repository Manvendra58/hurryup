import { useI18n } from '../i18n/I18nProvider'

const Footer = () => {
  const { t } = useI18n()
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold text-white">HurryUp</span>
            </div>
            <p className="text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t('common.features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {t('footer.pricing')}
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition-colors">
                  {t('footer.documentation')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t('common.about')}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.connect')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#twitter" className="hover:text-white transition-colors">
                  {t('common.twitter')}
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-white transition-colors">
                  {t('common.github')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t('common.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HurryUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
