'use client';
import { useCurrentLocale } from "@/app/lib/useCurrentLocale";
import en from "@/messages/contacts/en.json";
import ru from "@/messages/contacts/ru.json";



export const useContacts = () => {
    const locale = useCurrentLocale();
    const messages = { en, ru };



    const {
        name,
        phone,
        email,
        title,
        description,

        telegram,
        github,
        linkedin,
        location,
        contactTitle,
        contactDescription,
        yourContactTitle,
        yourContactDescription,
    } = messages[locale];

    return {
        title,
        description,
        name,
        phone,
        email,
        telegram,
        github,
        linkedin,
        location,
        contactTitle,
        contactDescription,
        yourContactTitle,
        yourContactDescription,

    };
};
