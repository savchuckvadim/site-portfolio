'use client';
import CallMeNameInput from "./CallMeNameInput";
import CallMeEmailInput from "./CallMeEmailInput";
import CallMePhoneInput from "./CallMePhoneInput";
import CallMeMessage from "./CallMeMessageInput";

export interface CallMeInputsProps {
    locale: string;
    // formData: { name: string, email: string, phone: string, message: string };
    // handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export default function CallMeInputs({ locale }: CallMeInputsProps) {

    return <>
        <CallMeNameInput

            locale={locale}

        />
        <CallMeEmailInput
            locale={locale}
        />
        <CallMePhoneInput
            locale={locale}
        />
        <CallMeMessage
            locale={locale}
        />

        {/* <CallMeInput
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
        /> */}

    </>
}
