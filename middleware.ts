import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

// Create the internationalization middleware
const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
    localeDetection: false
});

export async function middleware(req: NextRequest) {
    console.log('Middleware - Request URL:', req.url);
    console.log('Middleware - Default Locale:', defaultLocale);

    // Handle internationalization first
    const response = intlMiddleware(req);

    return response;

}

export const config = {
    matcher: [
        // Match all pathnames except for
        // - api routes
        // - static files (e.g. favicon.ico, robots.txt)
        // - static media files (e.g. images, fonts)
        // - _next internal routes
        '/((?!api|_next|resume|.*\\..*).*)',
        // Also match the root path
        '/', '/(en|ru)/:path*'
    ]
};