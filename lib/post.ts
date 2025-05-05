import type { Metadata } from "next/types";
import { notFound } from "next/navigation";

export type PostMetadata = Metadata & {
	title: string;
	description: string;
};

export type BlogPostData = {
	slug: string;
	metadata: Metadata;
};

export async function getBlogPostMetadata(slug: string): Promise<BlogPostData> {
	try {
		const file = await import("@/content/" + slug + ".mdx");

		if (file?.metadata) {
			if (!file.metadata.title || !file.metadata.description) {
				throw new Error(`Missing some required metadata fields in: ${slug}`);
			}

			return {
				slug,
				metadata: {
					...file.metadata,
					openGraph: {
						title: file.metadata.title,
						description: file.metadata.description,
						images: [
							{
								url: process.env.NEXT_PUBLIC_CMS_URL + "/assets/" + file.metadata.image,
								width: 800,
								height: 600,
							},
						],
						locale: "en_US",
						type: "article",
					},
				},
			};
		} else {
			throw new Error(`Unable to find metadata for ${slug}.mdx`);
		}
	} catch (error: any) {
		console.error(error?.message);
		return notFound();
	}
}