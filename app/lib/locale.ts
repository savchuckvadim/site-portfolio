'use client'

import { useLocale } from 'next-intl'

export function getCurrentLocale(): 'en' | 'ru' {
  const locale = useLocale()
  return ['ru', 'en'].includes(locale) ? (locale as 'en' | 'ru') : 'en'
}