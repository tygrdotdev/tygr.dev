import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme/toggle";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function NavBar() {
	return (
		<>
			<nav className="flex flex-col items-center justify-center w-full">
				<div className="flex flex-row items-center justify-between max-w-[800px] w-full gap-4 px-2 py-4">
					<Link href="/" passHref>
						<div>
							<Image
								width={32}
								height={32}
								src="/logos/dark.jpg"
								alt="logo"
								className="hidden dark:block"
							/>
							<Image
								width={32}
								height={32}
								src="/logos/light.jpg"
								alt="logo"
								className="dark:hidden"
							/>
						</div>
					</Link>

					<div className="flex flex-row gap-6">
						<Link href="/">
							<Button variant="link" className="px-0">About</Button>
						</Link>
						<Link href="/projects">
							<Button variant="link" className="px-0">Projects</Button>
						</Link>
						<Link href="/blog">
							<Button variant="link" className="px-0">Blog</Button>
						</Link>
						<div className="hidden sm:flex flex-row gap-6">
							<Link href="/gallery">
								<Button variant="link" className="px-0">Gallery</Button>
							</Link>
							<Link href="/gear">
								<Button variant="link" className="px-0">Gear</Button>
							</Link>
							<Link href="/music">
								<Button variant="link" className="px-0">Music</Button>
							</Link>
						</div>
					</div>
					<div className="block sm:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button size="icon" variant="ghost">
									<Menu className="size-5" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="flex flex-col">
								<Link href="/gallery">
									<DropdownMenuItem>
										Gallery
									</DropdownMenuItem>
								</Link>
								<Link href="/gear">
									<DropdownMenuItem>
										Gear
									</DropdownMenuItem>
								</Link>
								<Link href="/music">
									<DropdownMenuItem>
										Music
									</DropdownMenuItem>
								</Link>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<div className="hidden sm:block">
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</>
	);
}
