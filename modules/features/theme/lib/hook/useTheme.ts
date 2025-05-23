import { useAppDispatch, useAppSelector } from "@/modules/app"
import { useEffect, useState } from "react";
import { ModeType, themeActions, ThemeType } from "../../model/ThemSlice";
import { changeMode, changeTheme, getStoredThemeAndMode, setThemeAndMode } from "../utils/toggler.util";


export const useTheme = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const theme = useAppSelector(state => state.theme.theme)
    const mode = useAppSelector(state => state.theme.mode)
    const dispatch = useAppDispatch()


    const setTheme = (theme: ThemeType) => dispatch(
        themeActions
            .setTheme({ theme })
    )

    const setMode = (mode: ModeType) => dispatch(
        themeActions
            .setMode({ mode })
    )
    // const [theme, setTheme] = useState<'violete' | 'default' | 'blue'>('default');

    // Устанавливаем начальное состояние темы на клиенте
    useEffect(() => {
        setIsMounted(true);
        const { theme, mode } = getStoredThemeAndMode();
        // const storedTheme = (localStorage.getItem('theme') as ThemeType) || 'default';
        // const storedMode = (localStorage.getItem('mode') as ModeType) || 'light';

        setTheme(theme);
        setMode(mode);

        // Устанавливаем классы на body после монтирования
        // document.body.classList.add(storedTheme);
        // document.body.classList.toggle('dark', storedMode === 'dark');
    }, []);

    const toggleMode = () => {
        // const newMode = mode === 'dark' ? 'light' : 'dark';
        const { mode: newMode } = changeMode(mode);
        setMode(newMode);
        // setIsSpinning(true);

        // setTimeout(() => setIsSpinning(false), 500);

        // localStorage.setItem('mode', newMode);
        // document.body.classList.toggle("dark", newMode === 'dark');
    };

    const toggleTheme = () => {
        // setIsThemeSpinning(true);
        // setTimeout(() => setIsThemeSpinning(false), 800);

        // const newTheme: "violete" | "default" | "blue" = theme === 'violete' ? 'blue' : theme === 'blue' ? 'default' : 'violete';
        const { theme: newTheme } = changeTheme(theme);
        setTheme(newTheme);
        // setOuterTheme && setOuterTheme(newTheme)
        // localStorage.setItem('theme', newTheme);

        // document.body.classList.remove('violete', 'blue', 'default');
        // document.body.classList.add(newTheme);
    };


    return {
        theme,
        mode,
        isMounted,
        toggleMode,
        toggleTheme,
        setTheme,
        setMode
    }
}

