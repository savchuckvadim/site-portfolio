import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Nest.js",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project3",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with CMS integration",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Nest.js", "GraphQL", "PostgreSQL"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project4",
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1">
              Portfolio
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work and personal projects
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
