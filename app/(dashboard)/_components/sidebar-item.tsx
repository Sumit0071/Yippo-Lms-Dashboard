"use client";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ( { icon: Icon, label, href } ) => {
    const pathName = usePathname();
    const router = useRouter();

    const isActive = ( pathName === "/" && href === "/" ) || pathName === href || pathName?.startsWith( `${href}/` );

    const onClick = () => {
        router.push( href );
    };

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "relative flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
            )}
        >
            <div className="flex items-center gap-x-2 py-4 w-full">
                <Icon
                    size={22}
                    className={cn( "text-slate-500", isActive && "text-sky-700" )}
                />
                <span>{label}</span>
            </div>
            {/* Right border */}
            {isActive && (
                <div className="absolute right-0 top-0 h-full w-1 bg-sky-700 transition-all" />
            )}
        </button>
    );
};
