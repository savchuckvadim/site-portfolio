import { memo, useCallback } from "react"
import CallMeInput from "./CallMeInput"
import { useAppDispatch, useAppSelector } from "@/modules/app"
import { callMeActions } from "@/modules/feature/call-me/CallMeSlice"

export default memo(function CallMePhoneInput({ locale }: { locale: string }) {
    const phone = useAppSelector(state => state.callMe.phone)
    const dispatch = useAppDispatch()
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(callMeActions.setFormValue({ key: 'phone', value: e.target.value }))
    }, [dispatch, callMeActions])

    return (
        <CallMeInput
            name="phone"
            id="phone"
            label={locale === "ru" ? "Телефон" : "Phone"}
            type="tel"
            placeholder="Your phone"
            value={phone}
            onChange={handleChange}
        />
    )
})
