import { CardDescription, CardHeader } from "@/components/ui/card"
import { memo } from "react"
import { CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default memo(function CallMeHeader({
    title,
    description,
    isDone
}: {
    title: string;
    description: string;
    isDone: boolean;
}) {
    return (
        <CardHeader>
            <div className="flex items-center justify-between gap-2">
                <CardTitle>{title}</CardTitle>
                {isDone && <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <p className="text-sm text-green-500">Done</p>
                </div>}
            </div>
            <CardDescription>
                {description}
            </CardDescription>
        </CardHeader>
    )
})
