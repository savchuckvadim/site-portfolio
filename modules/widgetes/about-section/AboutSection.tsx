'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ru from '@/messages/about-me/ru.json';
import en from '@/messages/about-me/en.json';
import { useCurrentLocale } from '@/app/lib/useCurrentLocale';

export default function AboutSection({ isFull }: { isFull: boolean }) {
    const locale = useCurrentLocale();
    const messages = { en, ru };
    const { title, long, middle, end, start, learn } = messages[locale];
    return (
        <section
            id="about"
            className={`w-full py-12 md:py-24 lg:py-12  ${isFull ? '' : 'bg-muted/50'}`}
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        {isFull && <Badge variant="outline" className="px-3 py-1">
                            About Me
                        </Badge>}
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {end}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid container items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <Image
                        src="/portfolio/code-2.avif"
                        width={400}
                        height={400}
                        alt="About Me"
                        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-4 text-left">
                            {long.map((paragraph, index) => (
                                <p
                                    key={`paragraph-${paragraph}-${index}`}
                                    className="text-base/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold">4+</div>
                                    <div className="text-sm text-muted-foreground">
                                        {locale === 'en'
                                            ? 'Years Experience'
                                            : 'Лет опыта'}
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold">
                                        50+
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {locale === 'en'
                                            ? 'Projects Completed'
                                            : 'Проектов выполнено'}
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold">
                                        20+
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {locale === 'en'
                                            ? 'Happy Clients'
                                            : 'Счастливых клиентов'}
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold">
                                        100500+
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {locale === 'en'
                                            ? 'Technologies'
                                            : 'Технологий'}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
