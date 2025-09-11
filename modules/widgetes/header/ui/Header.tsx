'use client';

import { useEffect, useRef, useState } from "react";
import HeaderContent from "./components/HeaderContent";
import BottomMenu from "./components/BottomMenu";


export default function Header() {
    const headerRef = useRef<HTMLElement | null>(null)
    const [showMiniMenu, setShowMiniMenu] = useState(false)

    useEffect(() => {
        debugger
        if (!headerRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowMiniMenu(!entry.isIntersecting)
            },
            { threshold: 0 }
        )

        observer.observe(headerRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])


    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);

    }, [])


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
    console.log('showMiniMenu')
    console.log(showMiniMenu)
    return (
        <>
            <header
                ref={headerRef}
                className={`bg-background w-full py-4 shadow-md bg-background`}>

                <HeaderContent isMounted={isMounted} />
            </header >
            {/* Мини-меню (toast в углу) */}
            {
                showMiniMenu && (
                    <BottomMenu isMounted={isMounted} />

                )
            }

        </>

    );
}
