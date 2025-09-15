'use client';
import type React from 'react';

import { memo } from 'react';
import { useContacts } from '../hooks/useContacts';

import { useCurrentLocale } from '@/app/lib/useCurrentLocale';

export default memo(function ContactSectionHeader({ isFull }: { isFull: boolean }) {
    const {
        title,
        description,
    } = useContacts()
    const locale = useCurrentLocale()

    return (

        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                {/* {isFull && <Badge variant="outline" className="px-3 py-1">
                    {locale === "ru" ? "Контакты" : "Contacts"}
                </Badge>} */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    {title}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {description}
                </p>
            </div>
        </div>

    );
})
