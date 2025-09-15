'use client';
import { Code2, Home, Mail, Projector } from 'lucide-react';
import ThemeMenu from './ThemeMenu';
import Link from 'next/link';
import { Tooltip } from '@/modules/shared/Tooltip';
import { useTranslations } from 'next-intl';
import { useCurrentLocale } from '@/app/lib/useCurrentLocale';

export default function BottomMenu({ isMounted }: { isMounted: boolean }) {
    const t = useTranslations('navigation');
    const locale = useCurrentLocale()
    return (
        <div className="fixed bottom-4 right-4 z-50 flex gap-2 p-3 rounded-xl bg-background/90 shadow-lg border animate-in fade-in slide-in-from-bottom-2">
            <Tooltip content={`${t('home')}`}>
                <Link href={`/${locale}/home`} className="p-2 rounded-lg hover:bg-muted">
                    <Home size={20} />
                </Link>
            </Tooltip>
            <Tooltip content={`${t('skills')}`}>
                <Link href={`/${locale}/skills`} className="p-2 rounded-lg hover:bg-muted">
                    <Code2 size={20} />
                </Link>
            </Tooltip>
            <Tooltip content={`${t('portfolio')}`}>
                <Link
                    href={`/${locale}/portfolio`}
                    className="p-2 rounded-lg hover:bg-muted"
                >
                    <Projector size={20} />
                </Link>
            </Tooltip>
            <Tooltip content={`${t('contacts')}`}>
                <Link href={`/${locale}/contacts`} className="p-2 rounded-lg hover:bg-muted">
                    <Mail size={20} />
                </Link>
            </Tooltip>

            {isMounted && <ThemeMenu />}
        </div>
    );
}
