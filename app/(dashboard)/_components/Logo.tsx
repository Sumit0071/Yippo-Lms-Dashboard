import Image from "next/image"
import { SidebarRoutes } from "./sidebar-routes"
export const Logo = () => {
    return (
        <div>
            <Image height={100} width={100} src="/yippo logo.png" alt="Logo" priority={true}></Image>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    )
}