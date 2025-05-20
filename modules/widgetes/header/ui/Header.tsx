// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const pathname = usePathname()

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <header
//       className={cn(
//         "fixed top-0 z-50 w-full transition-all duration-200",
//         isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
//       )}
//     >
//       <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//         <Link href="#home" className="flex items-center gap-2">
//           <span className="text-xl font-bold">DevPortfolio</span>
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-primary",
//                 pathname === item.href ? "text-primary" : "text-muted-foreground",
//               )}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Button variant="outline" size="sm" asChild>
//             <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
//               Resume
//             </Link>
//           </Button>
//         </nav>
//         <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
//           <Menu className="h-6 w-6" />
//           <span className="sr-only">Toggle menu</span>
//         </Button>
//         {isOpen && (
//           <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
//             <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg">
//               <div className="flex items-center justify-between">
//                 <Link href="#home" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
//                   <span className="text-xl font-bold">DevPortfolio</span>
//                 </Link>
//                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
//                   <X className="h-6 w-6" />
//                   <span className="sr-only">Close menu</span>
//                 </Button>
//               </div>
//               <nav className="mt-6 flex flex-col gap-4">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={cn(
//                       "text-sm font-medium transition-colors hover:text-primary",
//                       pathname === item.href ? "text-primary" : "text-muted-foreground",
//                     )}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <Button variant="outline" size="sm" asChild className="mt-2">
//                   <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
//                     Resume
//                   </Link>
//                 </Button>
//               </nav>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }



'use client';

import Link from "next/link";
import Image from "next/image";
// import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { ThemeMode } from "@/modules/features";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/modules/shared";
import { useTranslations } from 'next-intl';


export default function Header() {
    const t = useTranslations('navigation')
    const test = t('home')
    console.log(test)
    
    const pathname = usePathname();
    // const isPortfolio = false
    // Проверяем, находимся ли на странице портфолио
    const isPortfolio = pathname === "/portfolio" || pathname === "/home";
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [hoverClass, setHoverClass] = useState('')
    useEffect(() => {
        setIsMounted(true);

    }, [])
    const [theme, setTheme] = useState<'violete' | 'default' | 'blue'>('default');

    useEffect(() => {
        const storedTheme = (localStorage.getItem('theme') as 'violete' | 'default' | 'blue') || 'default';
        setTheme(storedTheme);

        theme === 'default'
            ? setHoverClass('hover:text-gray-300')
            : setHoverClass('hover:text-primary');
    }, []);

    useEffect(() => {
        theme === 'default'
            ? setHoverClass('hover:text-gray-300')
            : setHoverClass('hover:text-primary');


    }, [theme])


    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false); // Скрываем при скролле вниз
            } else {
                setIsVisible(true); // Показываем при скролле вверх
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`bg-background w-full py-4 shadow-md ${isPortfolio ? "blr" : "bg-background"}`}>
            {/* <header className={`w-full py-4 shadow-md bg-background`}> */}

            <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className={`transition-colors`}
                    >

                        <h2 className="text-2xl text-accent-foreground font-bold">Vadim</h2>
                        {/* <span className="text-lg text-accent-foreground font-semibold">Volkov Design</span> */}
                    </Link>


                </div>

                {/* Десктопное меню */}
                <nav className="hidden md:flex gap-4">
                    {/* <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/about" className="hover:text-gray-300">About us</Link>
                    <Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link>
                    <Link href="/admin" className="hover:text-gray-300">Login</Link> */}

                    <Link href="/" className={`cursor-pointer ${hoverClass}`}>{t('home')}</Link>
                    <Link href="/skills" className={`cursor-pointer ${hoverClass}`}>{t('skills')}</Link>
                    <Link href="/portfolio" className={`cursor-pointer ${hoverClass}`}>{t('portfolio')}</Link>
                    {/* <Link href="/admin" className={`cursor-pointer ${hoverClass}`}>{t('admin')}</Link> */}

                    {isMounted && <ThemeMode setOuterTheme={setTheme} />}
                    {isMounted && <LanguageSwitcher />}
                    {/* </Suspense> */}
                </nav>

                {/* Мобильное бургер-меню */}
                <div className="md:hidden flex flex-row justify-center items-center">
                    {isMounted && <ThemeMode setOuterTheme={setTheme} />}
                    {isMounted && <LanguageSwitcher />}
                    <div className="md:hidden ">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="p-2">
                                    <Menu size={24} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="mr-1 p-2 w-48 bg-white rounded-lg shadow-md text-black">
                                <nav className="flex flex-col gap-2">
                                    <Link href="/" className="hover:text-gray-300">Home</Link>
                                    <Link href="/services" className="hover:text-gray-300">About us</Link>
                                    <Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link>
                                    <Link href="/admin" className="hover:text-gray-300">Админка</Link>
                                </nav>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

            </div>
        </header>

    );
}
