'use client';

import { Card, CardContent } from "@/components/ui/card";


import { useCallMe } from "../../hooks/useCalMe";
import CallMeHeader from "./CallMeHeader";
import CallMeInputs from "./CallMeInputs";
import CallMeSubmit from "./CallMeSubmit";
import { CheckCircle, Loader2 } from "lucide-react";
import { useCurrentLocale } from "@/app/lib/useCurrentLocale";
import { useMemo } from "react";

export default function CallMe() {

    const {
        title,
        description,
        handleSubmit,
        isLoading,
        isSent,
        isDone
    } = useCallMe()
    const locale = useCurrentLocale()
    const sentMessage = useMemo(() => {
        return {
            title: locale === "ru" ? "Сообщение отправлено" : "Message sent",
            description: locale === "ru" ? "Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время." : "Thank you for your message. We will contact you soon.",
        }
    }, [locale])

    return <Card        >
        <CallMeHeader
            title={title}
            description={description}
            isDone={isDone}
        />
        <CardContent>
            {isLoading
                ? <div className="flex justify-center items-center h-[480px]">
                    <Loader2 className="w-4 h-4 animate-spin" />
                </div>
                : isSent
                    ? <div className="flex justify-between items-start h-[480px] gap-5 pt-10">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xs font-bold">{sentMessage.title}</h1>
                            <p className="text-4xs text-muted-foreground">{sentMessage.description}</p>

                        </div>

                    </div>
                    : <form onSubmit={handleSubmit} className="space-y-4 h-[480px]">
                        <CallMeInputs />



                        <CallMeSubmit />

                    </form>}
        </CardContent>
    </Card>
}
