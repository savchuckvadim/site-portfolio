'use client';

import type React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';


import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useContacts } from '../../hooks/useContacts';


export default memo(function Contacts({

}) {


    const {
        contactTitle,
        contactDescription,
        email,
        phone,
        telegram,
        github,
        linkedin,
        location,
    } = useContacts()

    return (

        <Card className='h-full'>
            <CardHeader>
                <CardTitle>{contactTitle}</CardTitle>
                <CardDescription>
                    {contactDescription}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-sm font-medium">
                            Email
                        </p>
                        <Link
                            href="mailto:your.email@example.com"
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            {email}
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-sm font-medium">
                            Phone
                        </p>
                        <Link
                            href="tel:+1234567890"
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            {phone}
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-sm font-medium">
                            Location
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {location}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-sm font-medium">
                            Telegram
                        </p>
                        <Link
                            href={`https://t.me/${telegram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            @{telegram}
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-sm font-medium">
                            GitHub
                        </p>
                        <Link
                            href={`https://github.com/${github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            github.com/{github}
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-sm font-medium">
                            LinkedIn
                        </p>
                        <Link
                            href={`https://linkedin.com/in/${linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            linkedin.com/in/{linkedin}
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>

    );
})
