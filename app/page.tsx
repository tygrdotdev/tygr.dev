import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { TextBlockWrapper } from "@/components/ui/text-block-wrapper";
import { Button } from "@/components/ui/button";
import Icons from "@/components/icons";
import NameSwitch from "@/components/name-switch";
import ProjectCard from "../components/projects/card";
import Config from "@/config.json";

export default async function Home() {
	const projects = Config.projects
		.filter((p) => p.featured === true)
		.slice(0, 4);

	return (
		<main className="flex flex-col items-center justify-center w-full">
			<div className="flex flex-col gap-4 px-2 py-8 max-w-[800px] w-full">
				<div className="flex flex-row gap-2 sm:gap-4 h-full">
					<div className="flex flex-row gap-2 justify-center items-start h-full max-h-[136px]">
						<div className="flex-col h-[136px] justify-between hidden sm:flex">
							<Link
								href="https://github.com/tygrdotdev"
								target="_blank"
							>
								<Button
									size={"icon"}
									className="size-10"
								>
									<Icons.Github className="size-6" />
								</Button>
							</Link>
							<Link
								href="https://bsky.app/profile/tygr.dev"
								target="_blank"
							>
								<Button
									size={"icon"}
									className="size-10"
								>
									<Icons.Bluesky className="size-5" />
								</Button>
							</Link>
							<Link
								href="https://instagram.com/tygrdev"
								target="_blank"
							>
								<Button
									size={"icon"}
									className="size-10"
								>
									<Icons.Instagram className="size-6" />
								</Button>
							</Link>
						</div>
						<Image
							width={136}
							height={136}
							className="max-h-[136px] max-w-[136px] w-full rounded-md hidden md:block border"
							src="/profile.png"
							alt="Avatar"
						/>
					</div>

					<div className="flex flex-col items-start">
						<small className="text-sm text-neutral-500">
							any ~ he/him • 18 • UK
						</small>
						<span className="items-center w-full text-2xl font-bold tracking-[0.010em] sm:text-3xl font-display font">
							<Balancer>
								<span className="flex flex-row items-center gap-2">
									<span className="text-neutral-500">
										yo, i&apos;m ty! aka
									</span>{" "}
									<NameSwitch
										names={[
											"tygrdev",
											"tygrdotdev",
											"tygrxqt",
										]}
									/>
								</span>
								<span className="text-neutral-500">a </span>
								full-stack{" "}
								<span className="text-neutral-500">
									web & app dev.{" "}
								</span>
								<br />
								<span className="text-neutral-500">
									founder of{" "}
								</span>
								<a
									target="_blank"
									href="https://nordstud.io"
									className="inline-flex flex-row items-center hover:text-neutral-800 dark:hover:text-neutral-200"
								>
									nord studio
									<span>
										<Icons.Nord className="w-8 h-8 mx-2 dark:text-neutral-400 text-neutral-600" />
									</span>
								</a>
							</Balancer>
						</span>
					</div>
				</div>

				<div className="flex flex-row items-center gap-2 pt-2 sm:hidden">
					<Link href="https://github.com/tygrdotdev" target="_blank">
						<Button
							size="sm"
							className="flex flex-row items-center h-full gap-2 px-2 py-1 text-sm font-medium"
						>
							<Icons.Github className="w-full h-full" /> GitHub
						</Button>
					</Link>
					<Link
						href="https://bsky.app/profile/tygr.dev"
						target="_blank"
					>
						<Button
							size="sm"
							className="flex flex-row items-center h-full gap-2 px-2 py-1 text-sm font-medium"
						>
							<Icons.Bluesky className="w-full h-full" />
							BlueSky
						</Button>
					</Link>
					<Link href="https://instagram.com/tygrdev" target="_blank">
						<Button
							size="sm"
							className="flex flex-row items-center h-full gap-2 px-2 py-1 text-sm font-medium"
						>
							<Icons.Instagram className="w-full h-full" />{" "}
							Instagram
						</Button>
					</Link>
				</div>

				<div className="flex-row justify-between hidden pt-4 sm:flex">
					<div className="flex flex-col gap-3">
						<p className="text-xl font-semibold">Languages</p>
						<div className="flex flex-row gap-2">
							<Icons.Typescript className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								TypeScript
							</p>
						</div>
						<div className="flex flex-row gap-2">
							<Icons.Rust className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								Rust
							</p>
						</div>
						<div className="flex flex-row gap-2">
							<Icons.Golang className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								Golang
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-xl font-semibold">Skills</p>
						<div className="flex flex-row gap-2">
							<Icons.Design className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								Brand / Software Design
							</p>
						</div>
						<div className="flex flex-row gap-2">
							<Icons.Figma className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								Figma / Photoshop
							</p>
						</div>
						<div className="flex flex-row gap-2">
							<Icons.Camera className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								Photography
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-xl font-semibold">Frameworks</p>
						<div className="flex flex-row gap-2">
							<Icons.React className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								React
							</p>
						</div>
						<div className="flex flex-row gap-2">
							<Icons.Tauri className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								Tauri
							</p>
						</div>
						<div className="flex flex-row gap-2">
							<Icons.Vue className="w-6 h-6" />
							<p className="text-neutral-600 dark:text-neutral-400">
								Vue
							</p>
						</div>
					</div>
				</div>

				<hr className="w-full my-4 border border-black/10 dark:border-white/10" />

				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col items-start gap-2 sm:justify-between sm:flex-row">
							<h2 className="text-2xl font-bold">Journey</h2>
							<small className="text-sm text-neutral-500">
								A little on how I got to where I am today.
							</small>
						</div>
						<TextBlockWrapper
							className="p-2 border rounded-md border-black/10 dark:border-white/10"
							expandButtonTitle="Read more"
						>
							<p>
								I discovered Discord in 2018 and regularly used
								the various bots on the platform. After using
								them consistently, I was curious about how they
								worked, so I asked Google. I looked at multiple
								JavaScript tutorials and tried to create my bot
								for people to use.
								<br />
								<br />
								After a while, I ran out of ideas for new things
								to add to these bots. However, there was one
								thing that I couldn&apos;t get my mind off. Some
								popular bots had websites you could visit,
								allowing you to control the bot! Now THAT was
								cool, and I wanted it for myself.
								<br />
								<br />
								Sooner or later, I switched my focus towards
								learning front-end development, and lost
								interest in Discord bots. After learning the
								basics of HTML, CSS and with my pre-existing
								knowledge of JavaScript, I created my{" "}
								<Link
									href="https://github.com/tygrvault/portfolio-v1"
									target="_blank"
									className="text-blue-500 dark:text-blue-400"
								>
									first website
								</Link>
								.
								<br />
								<br />
								Fastforward to today, I quit college so I can
								get started in the workplace, joined{" "}
								<Link
									href="https://www.demystifydigital.co.uk/"
									target="_blank"
									className="text-blue-500 dark:text-blue-400"
								>
									Demystify Digital
								</Link>{" "}
								as a Junior Developer where I build ecommerce
								sites and manage the company&apos;s
								infrastructure, and I&apos;m still building
								applications in my free time to help me learn
								new things, and benefit the world.
								<br />
								<br />
								This is my journey so far, and I&apos;m excited
								to see where it takes me next.
								<br />
								<br />
								<br />
							</p>
						</TextBlockWrapper>
					</div>

					<div className="flex flex-col gap-2">
						<div className="flex flex-row items-center justify-between w-full">
							<div className="flex flex-col items-start">
								<h2 className="text-2xl font-bold">Projects</h2>
								<small className="text-sm text-neutral-500">
									A few featured projects that I&apos;ve
									worked on!
								</small>
							</div>
							<Link href="/projects">
								<Button
									size={"icon"}
									className="size-10"
								>
									<Icons.LayoutGrid className="size-5" />
								</Button>
							</Link>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 pt-2 gap-6 md:gap-3">
							{projects.slice(0, 4).map((p, i: number) => (
								<ProjectCard key={i} project={p} />
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
