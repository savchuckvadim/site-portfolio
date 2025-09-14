import { ResumeDownLoad, ThemeMode } from '@/modules/features';
import { LanguageSwitcher } from '@/modules/shared';

export default function ThemeMenu() {
    return (
        <div className="flex flex-row items-center gap-2">
            <ThemeMode />
            <LanguageSwitcher />
            <ResumeDownLoad />
        </div>
    );
}
