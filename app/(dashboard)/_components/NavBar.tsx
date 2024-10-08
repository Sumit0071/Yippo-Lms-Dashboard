import { MobileSideBar } from "./mobile-sidebar";
import { NavbarRoutes } from "@/components/ui/navbar-routes";
export const NavBar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <MobileSideBar />
            
            <div className="flex-grow text-center">
                {/* Add any additional NavBar content here */}
                <NavbarRoutes />
            </div>
        </div>
    );
};
