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


    const setIsLoading = (status: boolean) => {
        dispatch(callMeActions.setIsLoading({ status }))
    }
    // const onNameChange = (data: CallMeState) => {
    //     dispatch(callMeActions.setFormValue({ key: 'name', value: data.name }))
    // }
    // const onEmailChange = (data: CallMeState) => {
    //     dispatch(callMeActions.setFormValue({ key: 'email', value: data.email }))
    // }
    // const onPhoneChange = (data: CallMeState) => {
    //     dispatch(callMeActions.setFormValue({ key: 'phone', value: data.phone }))
    // }
    // const onSubjectChange = (data: CallMeState) => {
    //     dispatch(callMeActions.setFormValue({ key: 'subject', value: data.subject }))
    // }
    // const onMessageChange = (data: CallMeState) => {
    //     dispatch(callMeActions.setFormValue({ key: 'message', value: data.message }))
    // }
    const setIsSent = (status: boolean) => {
        dispatch(callMeActions.setIsSent({ status }))
    }
    const setIsDone = (status: boolean) => {
        dispatch(callMeActions.setIsDone({ status }))
    }

    const messages = { en, ru };
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     subject: '',
    //     message: '',
    // });
    // const [isLoading, setIsLoading] = useState(false);
    // const [isSent, setIsSent] = useState(false);
    // const [isDone, setIsDone] = useState(false);

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
        setIsLoading(true);


        await sendCallMe(message, locale, name, phone, email);

        await setIsLoading(false);
        dispatch(callMeActions.resetForm())
        setIsSent(true);

    };
    const cachedhandleSubmit = useCallback(handleSubmit, [locale, setIsLoading, setIsSent]);
    const handleCloseMessage = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsSent(false);
        setIsDone(true);
    };
    const cachedhandleCloseMessage = useCallback(handleCloseMessage, [setIsSent, setIsDone]);
    const {

        // name,
        // phone,
        // email,


        yourContactTitle,
        yourContactDescription,
    } = messages[locale];

    return {
        locale,
        title: yourContactTitle,
        description: yourContactDescription,
        // name: state.name,
        // phone: state.phone,
        // email: state.email,
        // message: state.message,
        // formData: state,

        setIsSent,
        // onNameChange,
        // onEmailChange,
        // onPhoneChange,
        // onSubjectChange,
        // onMessageChange,
        handleSubmit: cachedhandleSubmit,
        handleChange: cachedhandleChange,


        isLoading: isLoading,
        isDone: isDone,
        isSent: isSent,

    };
};
