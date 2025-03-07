"use client";

import Image from "next/image";
import Icons from "@/components/icons";
import { BlurFade } from "@/components/ui/blur-fade";
import dynamic from "next/dynamic";

const ResponsiveMasonry = dynamic(
	() =>
		import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);
const Masonry = dynamic(
	() => import("react-responsive-masonry").then((mod) => mod.default),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

export default function Gallery({
	photos,
	breakPoints,
}: {
	photos: {
		image: string;
		camera: string;
	}[];
	breakPoints?: { [key: number]: number } | undefined;
}) {
	return (
		<>
			<ResponsiveMasonry
				className="w-full py-4"
				columnsCountBreakPoints={
					breakPoints ?? { 350: 1, 750: 2, 900: 3 }
				}
			>
				<Masonry gutter="1.5rem">
					{photos.map((img, idx) => {
						return (
							<BlurFade
								key={idx}
								delay={0.25 + idx * 0.05}
								inView
							>
								<div className="flex flex-col p-0 m-0 group">
									<Image
										src={img.image}
										alt={"Gallery Image"}
										width={1080}
										height={1080}
										quality={80}
										className="object-cover object-center w-full h-full border rounded-lg border-black/10 dark:border-white/10"
									/>
									<div className="w-full backdrop-blur">
										<div className="absolute bottom-0 items-center w-full p-4 text-white transition-opacity border-t-2 rounded-b-lg opacity-0 group-hover:opacity-100 border-black/10 dark:border-white/10 bg-black/70">
											<div className="flex flex-row items-center gap-2">
												<Icons.Camera className="w-4 h-4 font-medium" />
												<p className="font-medium text-md">
													{img.camera}
												</p>
											</div>
										</div>
									</div>
								</div>
							</BlurFade>
						);
					})}
				</Masonry>
			</ResponsiveMasonry>
		</>
	);
}
