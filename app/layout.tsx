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
    description: 'Fullstack Developer for your projects',
    keywords: keywords,
    openGraph: {
        title: 'Vadim Savchuk - Fullstack Developer',
        description: 'Fullstack Developer for your projects',
        url: 'https://portfolio-savchuckvadims-projects.vercel.app/en/home',
        siteName: 'Vadim Savchuk',
        type: 'website',
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
