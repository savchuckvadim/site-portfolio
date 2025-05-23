import { ModeType } from "../../model/ThemSlice";
import { ThemeType } from "../../model/ThemSlice";

export const getStoredThemeAndMode = (): { theme: ThemeType, mode: ModeType } => {
    const storedTheme = (localStorage.getItem('theme') as ThemeType) || 'default';
    const storedMode = (localStorage.getItem('mode') as ModeType) || 'light';
    document.body.classList.add(storedTheme);
    document.body.classList.toggle('dark', storedMode === 'dark');
    return {
        theme: storedTheme,
        mode: storedMode
    }
}

export const setThemeAndMode = (theme?: ThemeType, mode?: ModeType) => {
    if (theme) localStorage.setItem('theme', theme);
    if (mode) localStorage.setItem('mode', mode);
}

export const changeTheme = (previousTheme?: ThemeType): { theme: ThemeType } => {
 
    const newTheme = previousTheme === 'default' ? 'blue' : previousTheme === 'blue' ? 'violete' : 'default';
    setThemeAndMode(newTheme, undefined);

    document.body.classList.remove('violete', 'blue', 'default');
    document.body.classList.add(newTheme);

    return {
        theme: newTheme,
    }
}

export const changeMode = (previousMode?: ModeType): { mode: ModeType } => {
    // const { mode } = getStoredThemeAndMode();
    const newMode = previousMode === 'light' ? 'dark' : 'light';
    setThemeAndMode(undefined, newMode);
    localStorage.setItem('mode', newMode);
    document.body.classList.toggle("dark", newMode === 'dark');
    return {

        mode: newMode
    }
}
