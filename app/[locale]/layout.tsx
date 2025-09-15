import { locales } from '@/i18n';
import { Header } from '@/modules/widgetes';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Footer } from '@/modules/widgetes';
// import { Metadata } from 'next';
import LoadingScreen from '@/modules/shared/LoadingScreen/ui/LoadingScreen';


export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // const messages = await getMessages();
    const param = await params;
    const locale = param.locale;

    if (!locale || !locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    let messages;

    try {
        // messages = (await import(`@/messages/${locale}.json`)).default
        const navigation = (
            await import(`@/messages/navigation/${locale}.json`)
        ).default;
        const skills = (await import(`@/messages/skills/${locale}.json`))
            .default;
        const home = (await import(`@/messages/home/${locale}.json`)).default;
        const contacts = (await import(`@/messages/contacts/${locale}.json`)).default;
        messages = {
            navigation,
            skills,
            home,
            contacts,
        };
    } catch (error: unknown) {
        console.error('Error loading messages:', error);
        notFound();
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <>
                <LoadingScreen />
                <div className="w-full">
                    <Header />
                </div>
                <div className="container  mx-auto">{children}</div>
                <Footer />
            </>
        </NextIntlClientProvider>
    );
}
