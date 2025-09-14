export interface SkillEntry {
    name: string;
    code: string;
    description: string;
    experience: string;
}

export interface SkillCategory {
    name: string;
    skills: SkillEntry[];
}

export interface SkillsTranslations {
    sectionTitle: string;
    sectionSubtitle: string;
    categories: {
        [categoryId: string]: SkillCategory;
    };
}
