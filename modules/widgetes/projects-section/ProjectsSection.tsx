'use client';
import { useCurrentLocale } from '@/app/lib/useCurrentLocale';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    getProjectsTranslations,
    ProjectTranslation,
} from '@/modules/entities/Projects/lib/util';
import { ProjectsGrid } from './components/ProjectsGrid';

export default function ProjectsSection() {
    const locale = useCurrentLocale();
    const translations: ProjectTranslation = getProjectsTranslations(locale);
    const { title, subtitle, projects } = translations;

    return (
        <section id="projects" className="w-full py-7 md:py-24 lg:py-7">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <Badge variant="outline" className="px-3 py-1">
                            {locale === 'en' ? 'Portfolio' : 'Портфолио'}
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <ProjectsGrid projects={projects} />

                <div className="flex justify-center min-w-full">
                    <div className="flex flex-col justify-center gap-5 p-0 max-w-[200px]">
                        <Button variant="default" asChild>
                            <Link
                                href={`/${locale}/contacts`}

                            >
                                {locale === 'en' ? 'Contact Me' : 'Связаться со мной'}
                            </Link>
                        </Button>

                        <Button variant="outline" asChild>
                            <Link
                                href="https://github.com/savchuckvadim"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                 {locale === 'en' ? 'View More on GitHub' : 'GitHub'}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
