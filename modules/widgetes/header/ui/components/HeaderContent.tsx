

import Burger from "./Burger";
import HeaderNavigation from "./HeaderNavigation";
import ThemeMenu from "./ThemeMenu";

export interface HeaderContentProps {
    isMounted: boolean;


}
export default function HeaderContent({ isMounted}: HeaderContentProps) {

    return isMounted && (



        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

            <HeaderNavigation />

            <Burger />



            <ThemeMenu />




        </div>

    )
}