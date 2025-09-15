'use client';
import { useCurrentLocale } from "@/app/lib/useCurrentLocale";
import en from "@/messages/contacts/en.json";
import ru from "@/messages/contacts/ru.json";
import { useCallback, useEffect, useState } from "react";
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
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (isSent) {

            cachedhandleCloseMessage();
        }
    }, [isSent]);



    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const cachedhandleChange = useCallback(handleChange, []);
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
    const cachedhandleSubmit = useCallback(handleSubmit, []);
    const handleCloseMessage = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsSent(false);
        setIsDone(true);
    };
    const cachedhandleCloseMessage = useCallback(handleCloseMessage, []);
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

        setIsSent,
        handleChange: cachedhandleChange,
        handleSubmit: cachedhandleSubmit,


        isLoading,
        isDone,
        isSent,

    };
};
