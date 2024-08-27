"use client"
import { Layout, Compass, List, BarChart } from "lucide-react"
import { SidebarItem } from "./sidebar-item"
import { usePathname } from "next/navigation"
const getRoutes = [
    {
        icon: Layout,
        label: "DashBoard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    }
]
const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics"
    }
]
const routes = getRoutes;
export const SidebarRoutes = () => {
    const pathName = usePathname();
    const isTeacherPage = pathName?.includes( "/teacher" )
    const routes = isTeacherPage ? teacherRoutes : getRoutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map( ( route ) => (
                <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
            ) )}
        </div>
    )
}