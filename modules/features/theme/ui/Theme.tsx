'use client';

import { useEffect, useState } from "react";
import { Atom, Dice1, Dice2, Dice3, MoonStar, SunDim } from "lucide-react";
import './style.css'
import { useTheme } from "../lib/hook/useTheme";

export default function ThemeMode({ }) {
    const [isSpinning, setIsSpinning] = useState<boolean>(false);
    const [isThemeSpinning, setIsThemeSpinning] = useState<boolean>(false);
    const { theme, mode, isMounted, toggleMode, toggleTheme } = useTheme();

    const handleToggleTheme = () => {
        setIsThemeSpinning(true);
        setTimeout(() => setIsThemeSpinning(false), 800);
        toggleTheme();
    }

    const handleToggleMode = () => {
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 500);
        toggleMode();
    }



    if (!isMounted) return null;
    return (
        <>
            <div onClick={handleToggleTheme} className={`cursor-pointer text-foreground ${isThemeSpinning ? 'animate-spin-fast animate-shake' : ''}`}>

                {theme == 'default' ? <Atom className="h-4 w-4 md:h-6 md:w-6" color={mode === 'dark' ? "white" : "black"} />
                    : theme == 'blue' ? <Atom className="h-4 w-4 md:h-6 md:w-6" color="blue" />
                        : theme == 'violete' ? <Atom className="h-4 w-4 md:h-6 md:w-6" color="violet" />
                            : <Atom className="h-4 w-4 md:h-6 md:w-6" color={mode === 'dark' ? "white" : "black"} />
                }

            </div>
            <div
                className="p-0 ml-1 mr-1 md:m-0 flex items-center justify-center cursor-pointer transition-transform duration-300"
                onClick={handleToggleMode}
            >
                <div className={`text-foreground ${isSpinning ? 'animate-spin' : ''}`}>
                    {mode === 'dark' ? <MoonStar className="h-4 w-4 md:h-6 md:w-6" size={24} /> : <SunDim className="h-4 w-4 md:h-6 md:w-6" size={24} />}
                </div>
            </div>
        </>
    );
}
