import { memo, useCallback } from "react"
import CallMeInput from "./CallMeInput"
import { useAppDispatch, useAppSelector } from "@/modules/app"
import { callMeActions } from "@/modules/feature/call-me/CallMeSlice"

export default memo(function CallMeNameInput({ locale }: { locale: string }) {
    const name = useAppSelector(state => state.callMe.name)
    const dispatch = useAppDispatch()
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(callMeActions.setFormValue({ key: 'name', value: e.target.value }))
    }, [dispatch, callMeActions])
    return (
        <CallMeInput
            name="name"
            id="name"
            label={locale === "ru" ? "Имя" : "Name"}
            type="text"
            placeholder="Your name"
            value={name}
            onChange={handleChange}
        />
    )
})
