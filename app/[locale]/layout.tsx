import { locales } from '@/i18n';
import { Header } from '@/modules/widgetes';
import LoadingScreen from '@/modules/shared/LoadingScreen/ui/LoadingScreen';
import { NextIntlClientProvider } from 'next-intl';
import { Providers } from '@/modules/app';
import { notFound } from 'next/navigation';
import { Footer } from '@/modules/widgetes';
import { Geist, Geist_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Volkov Design",
    description: "Elegant and Unique Design",
    keywords: ["Design", "Interior Design", "Architecture"],
    openGraph: {
        title: "Volkov Design - Elegant and Unique",
        description: "Discover top-notch interior design and architecture solutions.",
        url: "https://volkovdesign.com",
        siteName: "Volkov Design",
        // locale: "en_US",
        type: "website",
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Volkov Design",
    //   description: "Elegant and Unique Design",
    //   creator: "@volkovdesign",
    //   // images: ["https://volkovdesign.com/twitter-image.jpg"],
    // },
};
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
    console.log('param.locale')
    console.log(locale)
    console.log(locale)
    if (!locale || !locales.includes(locale as any)) {
        notFound();
    }

    let messages

    try {
        // messages = (await import(`@/messages/${locale}.json`)).default
        const navigation = (await import(`@/messages/navigation/${locale}.json`)).default
        const skills = (await import(`@/messages/skills/${locale}.json`)).default

        messages = {
            navigation,
            skills
        }
    } catch (e) {
        notFound()
    }

    return (<NextIntlClientProvider locale={locale} messages={messages}>
        <div className="fixed w-full z-10">
            <Header />
        </div>
        {children}
        <Footer />

    </NextIntlClientProvider>

    )
} 