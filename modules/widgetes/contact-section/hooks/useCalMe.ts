'use client';
import { useCurrentLocale } from "@/app/lib/useCurrentLocale";
import en from "@/messages/contacts/en.json";
import ru from "@/messages/contacts/ru.json";
import { useCallback, useEffect, useState } from "react";
import { sendCallMe } from "../lib/send-call-me";
import { useAppDispatch, useAppSelector } from "@/modules/app";
import { callMeActions, CallMeState } from "@/modules/feature/call-me/CallMeSlice";



export const useCallMe = () => {
    const locale = useCurrentLocale();
    const dispatch = useAppDispatch();
    const { isLoading, isSent, isDone, message, name, phone, email } = useAppSelector(state => state.callMe)

    const setIsSent = (status: boolean) => {
        dispatch(callMeActions.setIsSent({ status }))
    }
    const setIsDone = (status: boolean) => {
        dispatch(callMeActions.setIsDone({ status }))
    }

    const messages = { en, ru };


    useEffect(() => {
        if (isSent) {

            cachedhandleCloseMessage();
        }
    }, [isSent]);




    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        dispatch(callMeActions.setFormValue({ key: name as keyof CallMeState, value }));
    };
    const cachedhandleChange = useCallback(handleChange, [dispatch, callMeActions]);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend or a service like Formspree

        // Reset form after submission
        dispatch(callMeActions.setIsLoading({ status: true }));


        await sendCallMe(message, locale, name, phone, email);

        await dispatch(callMeActions.setIsLoading({ status: false }));
        dispatch(callMeActions.resetForm())
        setIsSent(true);

    };
    const cachedhandleSubmit = useCallback(handleSubmit, [locale, setIsSent]);
    const handleCloseMessage = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsSent(false);
        setIsDone(true);
    };
    const cachedhandleCloseMessage = useCallback(handleCloseMessage, [setIsSent, setIsDone]);
    const {


        yourContactTitle,
        yourContactDescription,
    } = messages[locale];

    return {
        locale,
        title: yourContactTitle,
        description: yourContactDescription,


        setIsSent,


        handleSubmit: cachedhandleSubmit,
        handleChange: cachedhandleChange,


        isLoading: isLoading,
        isDone: isDone,
        isSent: isSent,

    };
};
