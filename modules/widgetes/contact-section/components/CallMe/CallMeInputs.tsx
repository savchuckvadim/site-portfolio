'use client';


import { useCallMe } from "../../hooks/useCalMe";
import CallMeInput from "./CallMeInput";

export default function CallMeInputs() {

    const {
        locale,
        handleChange,
        formData,


    } = useCallMe()


    return <>
        <CallMeInput
            name="name"
            id="name"
            label={locale === "ru" ? "Имя" : "Name"}
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
        />
        <CallMeInput
            name="email"
            id="email"
            label={"Email"}
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
        />
        <CallMeInput
            name="phone"
            id="phone"
            label={locale === "ru" ? "Телефон" : "Phone"}
            type="tel"
            placeholder="Your phone"
            value={formData.phone}
            onChange={handleChange}
        />
        <CallMeInput
            name="message"
            id="message"
            label={locale === "ru" ? "Сообщение" : "Message"}
            type="textarea"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
        />

    </>
}
