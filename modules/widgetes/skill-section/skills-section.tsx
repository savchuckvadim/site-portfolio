'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslations } from 'next-intl';
import { Skills } from '@/modules/entities/Skills';
import { useCurrentLocale } from '@/app/lib/useCurrentLocale';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Skill = {
    name: string;
    description: string;
    experience: string;
};

type Category = {
    name: string;
    skills: Skill[];
};

type SkillsTranslations = {
    sectionTitle: string;
    sectionSubtitle: string;
    categories: Record<string, Category>;
};

export default function SkillsSection({ isFull }: { isFull: boolean }) {

    const locale = useCurrentLocale();
    const title = locale === 'en' ? 'Technical Skills' : 'Технические навыки';
    const subtitle =
        locale === 'en'
            ? 'A comprehensive overview of my technical skills and experience'
            : 'Обзор моих технических навыков и опыта';
    return (
        <section
            id="skills"
            className={`w-full py-12 md:py-24 lg:py-7 ${isFull ? '' : 'bg-muted/50'}`}
        >
            <div className="container px-4 md:px-6  min-h-screen">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        {
                            isFull && <Badge variant="outline" className="px-3 py-1">{locale === 'en' ? 'Skills' : 'Навыки'}</Badge>
                        }
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <Skills />
                <div className="min-w-full flex justify-center items-end min-h-full">
                    <Link href={`/${locale}/portfolio`}> <Button variant="outline" className='bg-primary text-primary-foreground' >
                        {locale === 'en' ? 'View Projects' : 'Посмотреть проекты'}
                    </Button> </Link>
                </div>
            </div>
        </section>
    );
}
