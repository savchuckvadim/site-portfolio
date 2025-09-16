import Burger from './Burger';
import HeaderNavigation from './HeaderNavigation';
import ThemeMenu from './ThemeMenu';

export interface HeaderContentProps {
    isMounted: boolean;
}
export default function HeaderContent({ isMounted }: HeaderContentProps) {
    return (
        isMounted && (
            <div className="container mx-auto xs:px-6 sm:px-0 flex items-center justify-between">
                <HeaderNavigation />
                <Burger />
                <ThemeMenu />
            </div>
        )
    );
}
