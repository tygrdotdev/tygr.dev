import { Inter, JetBrains_Mono, Literata, Sora } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import { Metadata } from "next";
import NavBar from "@/components/nav";
import { ThemeProvider } from "@/components/theme/provider";
import { baseUrl } from "@/app/sitemap";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});
const sora = Sora({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sora",
});
const literata = Literata({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-literata",
});
const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'tygr.dev',
		template: '%s | tygr.dev',
	},
	description:
		"yo, i'm ty! aka tygrdev. a full-stack web & app developer and founder of nord studio.",
	keywords: [
		"tygrdotdev",
		"ty mason",
		"tygr dev",
		"tygr",
		"tyger796",
		"tyger",
	],
	openGraph: {
		title: 'tygr.dev',
		description: "yo, i'm ty! aka tygrdev. a full-stack web & app developer and founder of nord studio.",
		url: baseUrl,
		siteName: 'tygr.dev',
		locale: 'en_GB',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${sora.variable} ${literata.variable} ${jetbrainsMono.variable}`}
			suppressHydrationWarning
		>
			<body className="bg-neutral-100 dark:bg-neutral-900">
				<div
					className="w-full min-h-screen p-2 sm:p-4 font-sans"
					vaul-drawer-wrapper=""
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<NavBar />
						{children}
						<Footer />
					</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
