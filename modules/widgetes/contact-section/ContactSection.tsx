'use client';
import type React from 'react';
import CallMe from './components/CallMe/CallMe';
import Contacts from './components/Contacts/Contacts';

import ContactsSectionHeader from './components/ContactsSectionHeader';
import { memo } from 'react';
import { useContacts } from './hooks/useContacts';

export default memo(function ContactSection({ isFull }: { isFull: boolean }) {
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
        <section
            id="contact"
            className={"w-full py-12 md:py-24 lg:py-7 " + (!isFull && "bg-muted/50")}
        >

            <div className="container px-4 md:px-6">
                <ContactsSectionHeader isFull={isFull} />
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <Contacts
                            contactTitle={contactTitle}
                            contactDescription={contactDescription}
                            email={email}
                            phone={phone}
                            telegram={telegram}
                            github={github}
                            linkedin={linkedin}
                            location={location}
                        />
                    </div>
                    <CallMe />

                </div>
            </div>
        </section>
    );
})
