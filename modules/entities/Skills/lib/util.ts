import ru from '@/messages/skills/ru.json';
import en from '@/messages/skills/en.json';
import { SkillsTranslations } from '../types/skill-type';

export function getSkillsTranslations(locale: 'en' | 'ru'): SkillsTranslations {
    const messages = { en, ru };
    return messages[locale];
}
