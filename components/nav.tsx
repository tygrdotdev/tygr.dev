import AuthDropdown from "@/components/auth/user-dropdown";
import { ThemeToggle } from "@/components/theme-toggle";
import LightLogo from "@/public/assets/logos/light.jpg";
import DarkLogo from "@/public/assets/logos/dark.jpg";
import UserDrawer from "@/components/auth/user-drawer";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <>
            <nav className="sticky top-0 flex items-center justify-center bg-gradient-to-b from-primary-200 dark:from-primary-800 from-20% z-50">
                <div className="m-3 sm:mx-6 sm:mt-3 border border-black/10 dark:border-white/10 rounded-xl max-w-[1400px] w-full flex items-center justify-between h-[76px] min-h-[76px] px-4 md:px-6 backdrop-blur-md bg-white/60 dark:bg-black/60">
                    <Link href="/" className="transition-all">
                        <Image width={42} height={42} alt="Logo" aria-label="Logo" src={DarkLogo} className="hidden dark:block" />
                        <Image width={42} height={42} alt="Logo" aria-label="Logo" src={LightLogo} className="block dark:hidden" />
                    </Link>
                    <div className="flex-row hidden gap-2 sm:flex">
                        <Link href="/">
                            <Button variant={"link"} aria-label="Home" size={"sm"}>
                                Home
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant={"link"} aria-label="Projects" size={"sm"}>
                                Projects
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button variant={"link"} aria-label="Blog" size={"sm"}>
                                Blog
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <div className="flex-row items-center hidden gap-4 sm:flex">
                            <ThemeToggle />
                            <AuthDropdown />
                        </div>
                        <div className="flex flex-row items-center gap-4 sm:hidden">
                            <UserDrawer />
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}