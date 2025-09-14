import ru from '@/messages/projects/ru.json';
import en from '@/messages/projects/en.json';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string | string[];
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
}
export interface ProjectTranslation {
    title: string;
    subtitle: string;
    projects: Project[];
}

export const getProjectsTranslations = (
    locale: 'en' | 'ru',
): ProjectTranslation => {
    const messages = { en, ru };
    return messages[locale] as ProjectTranslation;
};
