import ProjectCard from "@/app/projects/card";
import Config from "@/config.json";

export default async function ProjectsPage() {
	const projects = Config.projects;

	return (
		<>
			<div className="flex flex-col gap-2 pt-2 w-full max-w-[800px]">
				<div className="pb-4">
					<h2 className="text-2xl font-bold sm:text-3xl font-display">
						Projects
					</h2>
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						I&apos;ve made a lot of things over the years,
						here&apos;s a few of them.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-3 px-2 md:px-0">
					{projects.map((p, i: number) => (
						<ProjectCard key={i} project={p} />
					))}
				</div>
			</div>
		</>
	);
}
