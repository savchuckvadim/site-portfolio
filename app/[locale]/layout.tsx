import { locales } from '@/i18n';
import { Header } from '@/modules/widgetes';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Footer } from '@/modules/widgetes';
import { Metadata } from 'next';



export const metadata: Metadata = {
    title: "Vadim Savchuk",
    description: "Site of Vadim Savchuk - Frontend Developer",
    keywords: ["Developer", "Interior Design", "Architecture"],
    openGraph: {
        title: "Savchuk Developer - Architecture and Web Development",
        description: "Discover top-notch architecture and web development solutions.",
        url: "https://savchukdeveloper.com",
        siteName: "Savchuk Developer",
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

    if (!locale || !locales.includes(locale as typeof locales[number])) {
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
    } catch (error: unknown) {
        console.error('Error loading messages:', error);
        notFound()
    }

    return (<NextIntlClientProvider locale={locale} messages={messages}>
        <div className="w-full">
            <Header />
        </div>
        <div className="container  mx-auto">
            {children}
        </div>
        <Footer />

    </NextIntlClientProvider>

    )
} 