import { useI18n } from '../i18n/I18nProvider'

const Features = () => {
  const { t } = useI18n()
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized for speed with modern build tools and best practices.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Clean, modern UI components that look great on any device.',
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Works perfectly on desktop, tablet, and mobile devices.',
    },
    {
      icon: '⚡',
      title: 'Easy to Customize',
      description: 'Well-structured code that\'s easy to modify and extend.',
    },
    {
      icon: '🔒',
      title: 'Type Safe',
      description: 'Built with TypeScript for better developer experience.',
    },
    {
      icon: '🌐',
      title: 'Modern Stack',
      description: 'Uses the latest React, Vite, and Tailwind CSS technologies.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('features.powerfulTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.powerfulSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
