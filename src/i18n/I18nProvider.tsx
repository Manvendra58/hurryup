import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Lang, TranslationKey, translations } from './translations'

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'lang'

function getInitialLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'hi' || saved === 'en') return saved
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const toggleLang = () => setLang(lang === 'en' ? 'hi' : 'en')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18nContextValue>(() => {
    return {
      lang,
      setLang,
      toggleLang,
      t: (key) => translations[lang][key] ?? translations.en[key] ?? key,
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

