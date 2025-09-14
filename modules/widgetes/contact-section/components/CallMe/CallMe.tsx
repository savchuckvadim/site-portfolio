'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCallMe } from "../../hooks/useCalMe";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { DialogHeader } from "@/components/ui/dialog";
import { createPortal } from "react-dom";

export default function CallMe() {

    const {
        locale,
        title,
        description,
        handleChange,
        handleSubmit,
        formData,

        needShowMessage,
    } = useCallMe()


    return <Card        >
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">{locale === "ru" ? "Имя" : "Name"}</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">{locale === "ru" ? "Телефон" : "Phone"}</Label>
                    <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">{locale === "ru" ? "Сообщение" : "Message"}</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px]"
                    />
                </div>
                <Button type="submit" className="w-full">
                    {title}
                </Button>
            </form>
        </CardContent>
    </Card>
}
