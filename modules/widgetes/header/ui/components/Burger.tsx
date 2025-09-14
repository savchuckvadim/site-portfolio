'use client';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useTheme } from '@/modules/features/theme';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Burger() {
    const [hoverClass, setHoverClass] = useState('hover:text-indigo-700');
    const { theme } = useTheme();
    const t = useTranslations('navigation');
    useEffect(() => {
        debugger;
        theme === 'default'
            ? setHoverClass('hover:text-gray-300')
            : setHoverClass('hover:text-primary');
    }, [theme]);

    return (
        <div className="md:hidden flex flex-row justify-center items-center">
            <div className="md:hidden ">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="p-2">
                            <Menu size={24} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="mr-1 p-2 w-48 bg-white rounded-lg shadow-md text-black">
                        <nav className="flex flex-col gap-2">
                            <Link
                                href="/"
                                className={`cursor-pointer ${hoverClass}`}
                            >
                                {t('home')}
                            </Link>
                            <Link
                                href="/skills"
                                className={`cursor-pointer ${hoverClass}`}
                            >
                                {t('skills')}
                            </Link>
                            <Link
                                href="/portfolio"
                                className={`cursor-pointer ${hoverClass}`}
                            >
                                {t('portfolio')}
                            </Link>
                        </nav>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
