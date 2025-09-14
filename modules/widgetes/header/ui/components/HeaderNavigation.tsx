'use client';
import { useTheme } from '@/modules/features/theme';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderNavigation() {
    const pathname = usePathname();
    const { theme } = useTheme();
    const t = useTranslations('navigation');

    const isPortfolio = pathname.includes('portfolio');
    const isSkills = pathname.includes('skills');
    const isHome = pathname.includes('home');

    return (
        <nav className="hidden md:flex gap-4">
            <Link
                href="/"
                className={`cursor-pointer hover:text-primary ${isHome ? 'font-bold' : ''} ${isHome ? 'text-primary' : ''}`}
            >
                {t('home')}
            </Link>
            <Link
                href="/skills"
                className={`cursor-pointer hover:text-primary   ${isSkills ? 'font-bold' : ''} ${isSkills ? 'text-primary' : ''}`}
            >
                {t('skills')}
            </Link>
            <Link
                href="/portfolio"
                className={`cursor-pointer hover:text-primary   ${isPortfolio ? 'font-bold' : ''} ${isPortfolio ? 'text-primary' : ''}`}
            >
                {t('portfolio')}
            </Link>
        </nav>
    );
}
