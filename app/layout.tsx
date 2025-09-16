import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from '@/modules/app';
// import LoadingScreen from "@/modules/shared/LoadingScreen/ui/LoadingScreen";
import { keywords } from './keywords';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Vadim Savchuk',
    description: "Frontend Developer with over 5 years of experience building modern, scalable web applications.",

    keywords: keywords,
    authors: [{ name: "Vadim Savchuk", url: "https://portfolio-savchuckvadims-projects.vercel.app" }],
    creator: "Vadim Savchuk",
    publisher: "Vadim Savchuk",

    metadataBase: new URL("https://portfolio-savchuckvadims-projects.vercel.app"),
    openGraph: {
        title: 'Vadim Savchuk - Frontend Developer',
        description: "Frontend Developer with over 5 years of experience building modern, scalable web applications.",

        url: 'https://portfolio-savchuckvadims-projects.vercel.app/en/home',
        siteName: 'Vadim Savchuk',
        type: 'website',
        images: [
            {
              url: "/main/use1_double_cat.JPG", // 📌 добавь картинку в public/preview.png
              width: 1200,
              height: 630,
              alt: "Vadim Savchuk Portfolio Preview"
            }
          ]

    },
};

export default async function RootLayout({
    children,
    // params,
}: {
    children: React.ReactNode;
    // params: Promise<{ locale: string }>;
}) {
    return (
        <Providers>
            <html>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    {/* <LoadingScreen /> */}
                    {children}
                </body>
            </html>
        </Providers>
    );
}
