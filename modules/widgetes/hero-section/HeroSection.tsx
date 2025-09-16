'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import User from '@/modules/entities/User/ui/User';
import { useTranslations } from 'next-intl';
import { useCurrentLocale } from '@/app/lib/useCurrentLocale';

export default function HeroSection() {
    const t = useTranslations('home');
    const title = t('title');
    const description = t('description');
    const start = t('start');
    const learn = t('learn');
    const locale = useCurrentLocale()
    return (
        <section className="w-full py-6 md:py-10 lg:py-7">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                {title}
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                {description}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" asChild>
                                <Link href={`/${locale}/contacts`}>{start}</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href={`/${locale}/about`}>{learn}</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="min-w-full flex flex-col justify-end items-end">
                        <User />
                    </div>
                </div>
            </div>
        </section>
    );
}
