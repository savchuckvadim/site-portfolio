'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useTransition } from 'react';
import Flag from './components/Flag';

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const [isPending, startTransition] = useTransition()

  const otherLocale = currentLocale === 'ru' ? 'en' : 'ru'

  const switchLanguage = () => {
    const segments = pathname.split('/')
    segments[1] = otherLocale // заменяем /[locale]/...
    const newPath = segments.join('/')

    startTransition(() => {
      router.replace(newPath)
    })
  }

  return (
    <button onClick={switchLanguage} disabled={isPending} className="text-sm hover:underline">
      <Flag type={otherLocale} />
      {/* {otherLocale === 'en' ? 'English' : 'Русский'} */}
    </button>
  )
}

export default LanguageSwitcher;
