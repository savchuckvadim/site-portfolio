import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import User from "@/modules/entities/User/ui/User"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Digital Experience
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our platform helps you build beautiful, fast, and accessible websites that delight your users and drive
                results.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#get-started">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="min-w-full flex flex-col justify-end items-end">
            {/* <Image
            src='/window.svg'
            width={550}
            height={550}
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          /> */}
            <User />
          </div>
        </div>

      </div>
    </section>
  )
}
