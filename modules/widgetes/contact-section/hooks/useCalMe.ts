'use client';
import { useCurrentLocale } from "@/app/lib/useCurrentLocale";
import en from "@/messages/contacts/en.json";
import ru from "@/messages/contacts/ru.json";
import { useEffect, useState } from "react";
import { sendCallMe } from "../lib/send-call-me";



export const useCallMe = () => {
    const locale = useCurrentLocale();
    const messages = { en, ru };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [needShowMessage, setNeedShowMessage] = useState(false);



    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend or a service like Formspree

        // Reset form after submission
        setIsLoading(true);
        await handleCloseMessage();

        await sendCallMe(formData.message, locale, formData.name, formData.phone, formData.email);

        await setIsLoading(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsSent(true);

    };

    const handleCloseMessage = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        // setIsSent(false);
    };

    const {

        name,
        phone,
        email,


        yourContactTitle,
        yourContactDescription,
    } = messages[locale];

    return {
        locale,
        title: yourContactTitle,
        description: yourContactDescription,
        name,
        phone,
        email,
        formData,
        isSent,
        setIsSent,
        handleChange,
        handleSubmit,

        isLoading,
        needShowMessage,
        handleCloseMessage,
    };
};
