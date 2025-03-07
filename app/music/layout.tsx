import { Metadata } from "next";

export const metadata: Metadata = {
	title: "tygr.dev | Music",
	description: "A digestable list of my top albums.",
	keywords: [
		"tygrdotdev music",
		"ty mason music",
		"tygr dev music",
		"tygr music",
		"tyger796 music",
		"tyger music",
	],
};

export default function ProjectLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-full">
				{children}
			</div>
		</>
	);
}
