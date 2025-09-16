'use client';
import { useCurrentLocale } from '@/app/lib/useCurrentLocale';
import {
    SkillsTranslations,
    SkillCategory,
    SkillEntry,
} from '../types/skill-type';
import { getSkillsTranslations } from '../lib/util';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { memo } from 'react';
import { useSkillsTab } from '../model/useSkillsTab';

export default memo(function Skills() {
    const locale = useCurrentLocale();
    const translations: SkillsTranslations = getSkillsTranslations(locale);
    const categories = Object.entries(translations.categories) as [
        string,
        SkillCategory,
    ][];
    const { currentTab, setCurrentTab } = useSkillsTab();

    return (
        <div className="mx-auto container py-12">
            <Tabs
                value={currentTab}
                onValueChange={setCurrentTab}
                className="w-full"
            >
                <TabsList className="grid w-full grid-cols-2 h-24 md:h-20 lg:h-9 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map(([key, cat]) => (
                        <TabsTrigger key={key} value={key}>
                            {cat?.name || key}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {categories.map(([key, cat]) => {

                    return (
                        <TabsContent key={key} value={key} className="mt-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                {translations.categories[key]?.skills.map(
                                    (skill: SkillEntry) => {
                                        const code = skill.code;
                                        return (
                                            <Card
                                                key={skill.name}
                                                className="overflow-hidden"
                                            >
                                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                                    <div className="h-16 w-16 overflow-hidden rounded-md bg-muted p-2">
                                                        <img
                                                            src={`/logos/${code}.svg`}
                                                            alt={skill.name}
                                                            className="h-full w-full object-contain text-primary [&>path]:stroke-current [&>path]:fill-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <CardTitle>
                                                            {skill.name}
                                                        </CardTitle>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-3">
                                                    <CardDescription className="text-sm">
                                                        {skill.description}
                                                    </CardDescription>
                                                    <div>
                                                        <h4 className="text-sm font-semibold">
                                                            Experience:
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground">
                                                            {skill.experience}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        );
                                    },
                                )}
                            </div>
                        </TabsContent>
                    );
                })}
            </Tabs>
        </div>
    );
});
