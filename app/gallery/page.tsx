import Gallery from "@/components/gallery";
import Config from "@/config.json";

export default async function GalleryPage() {
	const photos = Config.gallery.toReversed();

	return (
		<>
			<main className="mx-auto max-w-[1960px] p-0 sm:p-2 md:p-4">
				<div className="w-full">
					<Gallery photos={photos} />
				</div>
			</main>
		</>
	);
}
