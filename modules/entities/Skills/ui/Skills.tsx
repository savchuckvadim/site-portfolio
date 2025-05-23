'use client'
import { useCurrentLocale } from "@/app/lib/useCurrentLocale"
import { SkillsTranslations, SkillCategory, SkillEntry } from "../types/skill-type"
import { getSkillsTranslations } from "../lib/util"
import { CardHeader, CardTitle } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
    const locale = useCurrentLocale()
    const translations: SkillsTranslations = getSkillsTranslations(locale)

    const categories = Object.entries(translations.categories) as [string, SkillCategory][]

    return (
        <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue={categories[0][0]} className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-24 md:h-20 lg:h-9 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((category) => (
                        <TabsTrigger key={category[0]} value={category[0]}>
                            {translations.categories[category[0]]?.name || category[0]}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {categories.map((category) => (
                    <TabsContent key={category[0]} value={category[0]} className="mt-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            {translations.categories[category[0]]?.skills.map((skill: SkillEntry) => {
                                const code = skill.code
                                return (
                                    <Card key={skill.name} className="overflow-hidden">
                                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                            <div className="h-16 w-16 overflow-hidden rounded-md bg-muted p-2">
                                                <img
                                                    src={`/logos/${code}.svg`}
                                                    alt={skill.name}
                                                    className="h-full w-full object-contain text-primary [&>path]:stroke-current [&>path]:fill-none"
                                                />
                                            </div>
                                            <div>
                                                <CardTitle>{skill.name}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <CardDescription className="text-sm">{skill.description}</CardDescription>
                                            <div>
                                                <h4 className="text-sm font-semibold">Experience:</h4>
                                                <p className="text-sm text-muted-foreground">{skill.experience}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}