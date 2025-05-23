'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"
import { Skills } from "@/modules/entities/Skills"

type Skill = {
  name: string
  description: string
  experience: string
}

type Category = {
  name: string
  skills: Skill[]
}

type SkillsTranslations = {
  sectionTitle: string
  sectionSubtitle: string
  categories: Record<string, Category>
}

export default function SkillsSection() {
  // const t = useTranslations("skills")
  // const translations = t.raw("skills") as SkillsTranslations
  // const categories = ["frontend", "backend", "databases", "devops", "architecture", "ai"]
  // const test = t('categories') as SkillsTranslations
  // console.log(test)
  // debugger
  // console.log(test['frontend'])
  // debugger
  // if (!translations || !translations.categories) {
  //   console.error("Missing translations:", translations)
  //   return null
  // }

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <Badge variant="outline" className="px-3 py-1">
              Expertise
            </Badge> */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive overview of my technical skills and experience
            </p>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  )
}
