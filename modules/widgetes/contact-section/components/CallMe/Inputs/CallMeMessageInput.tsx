import { memo, useCallback } from "react"
import CallMeInput from "./CallMeInput"
import { callMeActions } from "@/modules/feature/call-me/CallMeSlice"
import { useAppDispatch, useAppSelector } from "@/modules/app"

export default memo(function CallMeMessageInput({ locale }: { locale: string }) {
    const message = useAppSelector(state => state.callMe.message)
    const dispatch = useAppDispatch()
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(callMeActions.setFormValue({ key: 'message', value: e.target.value }))
    }, [dispatch, callMeActions])
    return (
        <CallMeInput
            name="message"
            id="message"
            label={locale === "ru" ? "Сообщение" : "Message"}
            type="textarea"
            placeholder="Your message"
            value={message}
            onChange={handleChange}
        />
    )
})
