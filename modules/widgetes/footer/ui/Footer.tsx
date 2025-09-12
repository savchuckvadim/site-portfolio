'use client'
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useCurrentLocale } from "@/app/lib/useCurrentLocale"
import ru from '@/messages/contacts/ru.json'
import en from '@/messages/contacts/en.json'

export default function Footer() {
  const locale = useCurrentLocale()
  const messages = { en, ru }
  const {
   
    name,
    phone,
    email,
    telegram,
    github,
    linkedin,
   
  } = messages[locale]

  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {year} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
