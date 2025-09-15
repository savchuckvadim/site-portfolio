import { memo, useCallback } from "react"
import CallMeInput from "./CallMeInput"
import { useCallMe } from "../../hooks/useCalMe"
import { useAppDispatch, useAppSelector } from "@/modules/app"
import { callMeActions } from "@/modules/feature/call-me/CallMeSlice"

export default memo(function CallMeEmailInput({ locale }: { locale: string }) {

    const email = useAppSelector(state => state.callMe.email)
    const dispatch = useAppDispatch()
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(callMeActions.setFormValue({ key: 'email', value: e.target.value }))
    }, [dispatch, callMeActions])
    return (
        <CallMeInput
        name="email"
        id="email"
        label={"Email"}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={handleChange}
    />
    )
})
