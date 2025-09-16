import { AboutSection, ContactSection, SkillsSection } from '@/modules/widgetes';

export default function About() {
    return (
        <main>
            <AboutSection isFull={true} />
            <SkillsSection isFull={false} />
            <ContactSection isFull={true} />
        </main>
    );
}
