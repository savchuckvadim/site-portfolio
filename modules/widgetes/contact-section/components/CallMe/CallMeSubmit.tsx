import { Button } from "@/components/ui/button";
import { memo, useMemo } from "react";
import { useCallMe } from "../../hooks/useCalMe";

export default memo(function CallMeSubmit() {
    const {
        locale,
        title,



    } = useCallMe()
    const cached = useMemo(() => {
        return {

            title,

        }
    }, [locale, title])
    return (
        <Button type="submit" className="w-full">
            {cached.title}
        </Button>
    )
})
