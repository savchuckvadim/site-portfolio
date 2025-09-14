import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './i18n';

export default getRequestConfig(async ({ locale }) => {
    // If no locale is provided, use the default locale
    const validLocale =
        locale && locales.includes(locale as any) ? locale : defaultLocale;
    console.log('validLocale');
    console.log(validLocale);
    // console.log(messages[validLocale as keyof typeof messages]);
    return {
        locale: validLocale,
        // messages: messages[validLocale as keyof typeof messages]
    };
});
