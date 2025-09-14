'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/modules/entities/Projects/lib/util';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Card key={project.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden relative">
                {Array.isArray(project.image) ? (
                    <ImageCarousel
                        images={project.image}
                        title={project.title}
                    />
                ) : (
                    <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                )}
            </div>

            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                        </Link>
                    </Button>
                )}
                {project.demoUrl && (
                    <Button size="sm" asChild>
                        <Link
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 3000); // каждые 3 секунды

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Image
            key={images[index]} // чтобы анимация срабатывала
            src={images[index]}
            alt={title}
            width={500}
            height={300}
            className="h-full w-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
        />
    );
}
