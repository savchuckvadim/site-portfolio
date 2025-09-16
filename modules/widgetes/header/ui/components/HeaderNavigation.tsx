'use client';
import { useTheme } from '@/modules/features/theme';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from '@/app/lib/useCurrentLocale';

export default function HeaderNavigation() {
    const pathname = usePathname();
    const { theme } = useTheme();
    const t = useTranslations('navigation');

    const isPortfolio = pathname.includes('portfolio');
    const isSkills = pathname.includes('skills');
    const isHome = pathname.includes('home');
    const isContacts = pathname.includes('contacts');
    const isAbout = pathname.includes('about');
    const locale = useCurrentLocale()


    return (
        <nav className="hidden md:flex gap-4 ">
            <Link
                href={`/${locale}/home`}
                className={`cursor-pointer hover:text-primary ${isHome ? 'font-bold' : ''} ${isHome ? 'text-primary' : ''}`}
            >
                {t('home')}

            </Link>
            <Link
                href={`/${locale}/about`}
                className={`cursor-pointer hover:text-primary   ${isAbout ? 'font-bold' : ''} ${isAbout ? 'text-primary' : ''}`}
            >
                {t('about')}
            </Link>
            <Link
                href={`/${locale}/skills`}
                className={`cursor-pointer hover:text-primary   ${isSkills ? 'font-bold' : ''} ${isSkills ? 'text-primary' : ''}`}
            >
                {t('skills')}
            </Link>
            <Link
                href={`/${locale}/portfolio`}
                className={`cursor-pointer hover:text-primary   ${isPortfolio ? 'font-bold' : ''} ${isPortfolio ? 'text-primary' : ''}`}
            >
                {t('portfolio')}
            </Link>

            <Link
                href={`/${locale}/contacts`}
                className={`cursor-pointer hover:text-primary   ${isContacts ? 'font-bold' : ''} ${isContacts ? 'text-primary' : ''}`}
            >
                {t('contacts')}
            </Link>
        </nav>
    );
}
