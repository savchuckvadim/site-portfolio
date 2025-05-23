'use client';

import { useEffect, useState } from "react";
import { Dice1, Dice2, Dice3, MoonStar, SunDim } from "lucide-react";
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

                {theme == 'default' ? <Dice1 color={mode === 'dark' ? "white" : "black"} />
                    : theme == 'blue' ? <Dice2 color="blue" />
                        : theme == 'violete' ? <Dice3 color="violet" />
                            : <Dice1 color={mode === 'dark' ? "white" : "black"} />
                }

            </div>
            <div
                className="p-0 ml-2 md:m-0 flex items-center justify-center cursor-pointer transition-transform duration-300"
                onClick={handleToggleMode}
            >
                <div className={`text-foreground ${isSpinning ? 'animate-spin' : ''}`}>
                    {mode === 'dark' ? <MoonStar size={24} /> : <SunDim size={24} />}
                </div>
            </div>
        </>
    );
}
