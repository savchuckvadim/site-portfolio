export const locales = ['en', 'ru'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

// export const messages = {
//     en: {
//         navigation: {
//             home: 'Home',
//             skills: 'Skills',
//             portfolio: 'Portfolio',
//             login: 'Login'
//         },
//         "skills": {
//             "sectionTitle": "Technical Skills",
//             "sectionSubtitle": "A comprehensive overview of my technical skills and experience",
//             "tab": {
//                 "frontend": "Frontend",
//                 "backend": "Backend",
//                 "databases": "Databases",
//                 "devops": "DevOps & Infrastructure",
//                 "architecture": "Architecture",
//                 "ai": "AI & Advanced Tech"
//             },
//             "experience": "Experience"
//         }
//     },
//     ru: {
//         navigation: {
//             home: 'Главная',
//             skills: 'Навыки',
//             portfolio: 'Портфолио',
//             login: 'Вход'
//         },
//         "skills": {
//             "sectionTitle": "Технические навыки",
//             "sectionSubtitle": "Подробный обзор моих технических навыков и опыта",
//             "tab": {
//                 "frontend": "Фронтенд",
//                 "backend": "Бэкенд",
//                 "databases": "Базы данных",
//                 "devops": "DevOps и инфраструктура",
//                 "architecture": "Архитектура",
//                 "ai": "AI и современные технологии"
//             },
//             "experience": "Опыт"
//         }
//     }
// } as const; 