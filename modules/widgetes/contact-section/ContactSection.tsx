'use client';
import type React from 'react';
import { Badge } from '@/components/ui/badge';
import CallMe from './components/CallMe/CallMe';
import { useContacts } from './hooks/useContacts';
import Contacts from './components/Contacts/Contacts';
import { useCallMe } from './hooks/useCalMe';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Dialog, DialogHeader, DialogDescription } from '@/components/ui/dialog';

export default function ContactSection() {
    const {
        title,
        description,
    } = useContacts()

    const {
        locale,
        isLoading,
        isSent,
        setIsSent,
    } = useCallMe()

    console.log(isLoading)
    return (
        <section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
            {
               (<Dialog open={isSent} onOpenChange={() => setIsSent(false)}>  <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {
                                locale === "ru" ? "Сообщение отправлено" : "Message sent"
                            }
                        </DialogDescription>
                    </DialogHeader>

                </DialogContent>  </Dialog>)
            }
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <Badge variant="outline" className="px-3 py-1">
                            Contact
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <Contacts />
                    </div>
                    <CallMe />

                </div>
            </div>
        </section>
    );
}
