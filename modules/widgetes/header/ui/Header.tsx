'use client';

import Link from "next/link";
import Image from "next/image";
// import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { ResumeDownLoad, ThemeMode } from "@/modules/features";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/modules/shared";
import { useTranslations } from 'next-intl';
import { useTheme } from "@/modules/features/theme";


export default function Header() {
    const t = useTranslations('navigation')


    const pathname = usePathname();
    const isPortfolio = pathname.includes("portfolio");
    const isSkills = pathname.includes("skills");
    const isHome = pathname.includes("home");

    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [hoverClass, setHoverClass] = useState('hover:text-indigo-700')
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setIsMounted(true);

    }, [])


    useEffect(() => {
        debugger
        theme === 'default'
            ? setHoverClass('hover:text-gray-300')
            : setHoverClass('hover:text-primary');


    }, [theme])


    // const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // if (currentScrollY > lastScrollY && currentScrollY > 50) {
            //     // setIsVisible(false); // Скрываем при скролле вниз
            // } else {
            //     // setIsVisible(true); // Показываем при скролле вверх
            // }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`bg-background w-full py-4 shadow-md bg-background`}>
            {/* <header className={`w-full py-4 shadow-md bg-background`}> */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* <div className="flex items-center gap-2"> */}
                {/* Десктопное меню */}
                <nav className="hidden md:flex gap-4">

                    <Link href="/" className={`cursor-pointer hover:text-indigo-700 ${isHome ? 'font-bold' : ''} ${isHome ? theme === 'default' ? "text-pink-400" : "text-primary" : ""}`}>{t('home')}</Link>
                    <Link href="/skills" className={`cursor-pointer hover:text-indigo-700  ${isSkills ? 'font-bold' : ''} ${isSkills ? theme === 'default' ? "text-pink-400" : "text-primary" : ""}`}>{t('skills')}</Link>
                    <Link href="/portfolio" className={`cursor-pointer hover:text-indigo-700  ${isPortfolio ? 'font-bold' : ''} ${isPortfolio ? theme === 'default' ? "text-pink-400" : "text-primary" : ""}`}>{t('portfolio')}</Link>



                </nav>
                {/* Мобильное бургер-меню */}
                <div className="md:hidden flex flex-row justify-center items-center">
                    {/* {isMounted && <ThemeMode setOuterTheme={setTheme} />}
                    {isMounted && <LanguageSwitcher />} */}
                    <div className="md:hidden ">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="p-2">
                                    <Menu size={24} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="mr-1 p-2 w-48 bg-white rounded-lg shadow-md text-black">
                                <nav className="flex flex-col gap-2">
                                    <Link href="/" className={`cursor-pointer ${hoverClass}`}>{t('home')}</Link>
                                    <Link href="/skills" className={`cursor-pointer ${hoverClass}`}>{t('skills')}</Link>
                                    <Link href="/portfolio" className={`cursor-pointer ${hoverClass}`}>{t('portfolio')}</Link>
                                </nav>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                {/* </div> */}

                <div className="flex flex-row items-center gap-2">

                    {isMounted && <ThemeMode />}
                    {isMounted && <LanguageSwitcher />}
                    {isMounted && <ResumeDownLoad />}

                </div>




            </div>
        </header>

    );
}
