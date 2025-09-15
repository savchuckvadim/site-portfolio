import { memo } from "react"
import CallMeInput from "./CallMeInput"

export default memo(function CallMeNameInput({ value, locale, onChange }: { value: string, locale: string, onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <CallMeInput
            name="name"
            id="name"
            label={locale === "ru" ? "Имя" : "Name"}
            type="text"
            placeholder="Your name"
            value={value}
            onChange={onChange}
        />
    )
})
