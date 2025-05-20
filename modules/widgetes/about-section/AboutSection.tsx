import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1">
              About Me
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A passionate fullstack developer with a focus on creating exceptional web experiences
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
            alt="About Me"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4 text-left">
              <p className="text-base/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I'm a fullstack developer with over 5 years of experience building web applications. My journey in web
                development started when I was in college, where I discovered my passion for creating digital
                experiences.
              </p>
              <p className="text-base/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I specialize in modern JavaScript frameworks like React, Next.js for frontend development, and Node.js,
                Nest.js for backend services. I'm passionate about writing clean, maintainable code and building
                scalable applications.
              </p>
              <p className="text-base/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community events.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
