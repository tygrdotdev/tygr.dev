export default async function BlogPage() {
	return (
		<>
			<div className="flex flex-col gap-2 pt-2 w-full max-w-[800px]">
				<div className="pb-4">
					<h2 className="text-2xl font-bold sm:text-3xl font-display">
						Blog
					</h2>
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						All of my blog posts and tutorials. I <s>try to</s>{" "}
						write about web development, programming, and games.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center w-full py-8">
					<p className="text-neutral-500">
						There are no posts to show at the moment.
					</p>
				</div>
			</div>
		</>
	);
}
