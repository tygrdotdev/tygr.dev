import Link from "next/link";
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
	let allBlogs = getBlogPosts()

	return (
		<div>
			{allBlogs.length === 0 && (
				<div className="flex flex-col items-center justify-center w-full py-8">
					<p className="text-neutral-500">
						There are no posts to show at the moment.
					</p>
				</div>
			)}
			{allBlogs
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1
					}
					return 1
				})
				.map((post) => (
					<Link
						key={post.slug}
						className="flex flex-col "
						href={`/blog/${post.slug}`}
					>
						<div className="flex flex-row gap-2 items-center justify-between">
							<p className="text-neutral-900 dark:text-neutral-100 tracking-tight hover:underline">
								{post.metadata.title}
							</p>
							<p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
								{formatDate(post.metadata.publishedAt, false)}
							</p>
						</div>
					</Link>
				))}
		</div>
	)
}

export default async function BlogPage() {
	return (
		<>
			<div className="flex flex-col gap-2 pt-2 w-full max-w-[800px] h-2/2">
				<div className="pb-4">
					<h2 className="text-2xl font-bold sm:text-3xl font-display">
						Blog
					</h2>
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						All of my blog posts and tutorials. I <s>try to</s>{" "}
						write about web development, programming, and games.
					</p>
				</div>
				<BlogPosts />
			</div>
		</>
	);
}