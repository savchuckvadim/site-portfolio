import { Footer } from "@/modules/widgetes/footer";
import { ContactSection } from "@/modules/widgetes";
import { AboutSection, ProjectsSection } from "@/modules/widgetes";
import { HeroSection } from "@/modules/widgetes";
import { Header } from "@/modules/widgetes";


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* <Footer /> */}
    </>
  )
}
