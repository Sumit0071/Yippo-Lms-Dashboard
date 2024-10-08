"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
export const NavbarRoutes = () => {
    const pathName = usePathname();
    // const router = useRouter();
    const isTeachePage = pathName?.startsWith( "/teacher" )
    const isPlayerPage = pathName?.startsWith( "/chapter" );

    return (
        <div className="flex gap-x-2 ml-auto justify-end">
            {isTeachePage || isPlayerPage ? (
                <Link href="/">
                    < Button >
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : ( <Link href="/teacher/courses" >
                <Button size="sm" variant="ghost">
                    Teacher Mode
                </Button>
            </Link> )}
            <UserButton afterSignOutUrl="/" />
        </div>
    )
} 