import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Logo from '../components/Logo'
import { useI18n } from '../i18n/I18nProvider'

const Register = () => {
  const { lang, setLang, t } = useI18n()
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role') || 'customer'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState<'customer' | 'farmer' | 'admin'>(role as any || 'customer')
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password || !confirmPassword) {
      setError(t('auth.error.fillAllFields'))
      return
    }

    if (password !== confirmPassword) {
      setError(t('auth.error.passwordsDoNotMatch'))
      return
    }

    if (password.length < 6) {
      setError(t('auth.error.passwordMinChars'))
      return
    }

    const success = register(name, email, password, selectedRole)
    if (success) {
      navigate(`/${selectedRole}/dashboard`)
    } else {
      setError(t('auth.error.emailExists'))
    }
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="flex justify-center">
            <Logo size="lg" />
          </Link>
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            {lang === 'en' ? 'EN' : 'हिंदी'}
          </button>
        </div>

        <div className="card bg-white/90 backdrop-blur-sm shadow-2xl border-2 border-green-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">{t('auth.createAccount')}</h2>
          <p className="text-gray-600 text-center mb-8">{t('auth.joinHurryUpToday')}</p>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('auth.registerAs')}</label>
            <div className="grid grid-cols-3 gap-2">
              {(['customer', 'farmer', 'admin'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setSelectedRole(r)}
                  className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                    selectedRole === r
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t(`role.${r}` as any)}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.fullName')}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.emailAddress')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.confirmPassword')}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
                required
              />
            </div>

            {selectedRole === 'farmer' && (
              <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm">
                <strong>Note:</strong> Your account will need admin verification before you can start selling.
              </div>
            )}

            <button type="submit" className="btn-primary bg-green-600 hover:bg-green-700 w-full">
              {t('auth.createAccount')}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            {t('auth.alreadyHaveAccount')}{' '}
            <Link to={`/login?role=${selectedRole}`} className="text-green-600 hover:text-green-700 font-medium">
              {t('auth.loginHere')}
            </Link>
          </p>

          <div className="mt-4 text-center">
            <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
              ← {t('auth.backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
