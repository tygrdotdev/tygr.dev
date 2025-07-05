import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/blog/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import Image from 'next/image'
import readingTime from 'reading-time'

import "../../highlight.css"

export async function generateStaticParams() {
	let posts = getBlogPosts()

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	let post = getBlogPosts().find((post) => post.slug === slug)
	if (!post) {
		return null;
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
	} = post.metadata

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${baseUrl}/blog/${post.slug}`,
			images: [
				{
					url: `${baseUrl}${post.metadata.hero}`,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [`${baseUrl}${post.metadata.hero}`],
		},
	}
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	let post = getBlogPosts().find((post) => post.slug === slug)

	if (!post) {
		notFound()
	}

	return (
		<>
			<div className="p-2 py-4 mx-auto w-full max-w-[800px]">
				<script
					type="application/ld+json"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'BlogPosting',
							headline: post.metadata.title,
							datePublished: post.metadata.publishedAt,
							dateModified: post.metadata.publishedAt,
							description: post.metadata.summary,
							image: post.metadata.hero
								? `${baseUrl}${post.metadata.hero}`
								: `/og?title=${encodeURIComponent(post.metadata.title)}`,
							url: `${baseUrl}/blog/${post.slug}`,
							author: {
								'@type': 'tygrdev',
								name: 'tygr.dev',
							},
						}),
					}}
				/>
				<div className="flex flex-col gap-4 pb-2">
					<h1 className="font-serif text-3xl font-bold sm:text-4xl">
						{post.metadata.title}
					</h1>
					<div className="flex flex-row items-center justify-between gap-4">
						<div className="flex flex-row items-center gap-2">
							<Image
								src="/profile.jpeg"
								alt="T"
								aria-label="Author avatar"
								width={28}
								height={28}
								className="rounded-full size-6"
							/>
							<p className="text-sm text-neutral-500 dark:text-neutral-400">
								tygrdotdev •{" "}
							</p>
							<time
								dateTime={post.metadata.publishedAt}
								className="items-center text-sm text-neutral-500 dark:text-neutral-400"
							>
								{formatDate(post.metadata.publishedAt)}
							</time>
						</div>
						<div>
							<p className="text-sm text-neutral-500 dark:text-neutral-400">
								{readingTime(post.content).text}
							</p>
						</div>
					</div>
					<Image
						src={post.metadata.hero}
						alt="hero image"
						height={200}
						width={800}
						className="mt-4 border rounded-lg border-black/10 dark:border-white/10"
					/>
				</div>
				<article className="prose prose-quoteless prose-neutral dark:prose-invert">
					<CustomMDX source={post.content} />
				</article>
			</div>
		</>
	)
}