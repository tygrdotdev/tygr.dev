"use client";

import { motion } from "motion/react"
import React from "react";

export default function NameSwitch(
	{
		names,
	}: {
		names: string[];
	},
	props?: React.HTMLAttributes<HTMLSpanElement>
) {
	// pick and random name out of the list, but not the current one
	const [mounted, setMounted] = React.useState(false);

	const [name, setName] = React.useState<string>(names[0]);
	const [lastIndex, setLastIndex] = React.useState<number>(0);

	const [isVisible, setIsVisible] = React.useState(true);

	React.useEffect(() => {
		setMounted(true);

		const interval = setInterval(() => {
			let newIndex = Math.floor(Math.random() * names.length);
			if (newIndex === lastIndex) {
				newIndex = (newIndex + 1) % names.length;
			}
			setLastIndex(newIndex);
			setName(names[newIndex]);
		}, 4000);

		const animationLoop = () => {
			// Text is visible initially
			setIsVisible(true)

			// After 3 seconds, make text invisible and move up
			const hideTimeout = setTimeout(() => {
				setIsVisible(false)
			}, 3000)

			// After 1 more second (4 seconds total), make text visible again
			const showTimeout = setTimeout(() => {
				setIsVisible(true)
			}, 4000)

			// Reset the animation after 4 seconds (complete cycle)
			const resetTimeout = setTimeout(animationLoop, 4000)

			// Clean up timeouts if component unmounts
			return () => {
				clearTimeout(hideTimeout)
				clearTimeout(showTimeout)
				clearTimeout(resetTimeout)
			}
		}

		// Start the animation loop
		animationLoop()

		return () => clearInterval(interval);
	}, [])

	return (
		<>
			{mounted ? (
				<div className="relative h-8 md:h-9">
					<motion.span
						className="absolute h-10 overflow-hidden"
						animate={{
							opacity: isVisible ? 1 : 0,
							y: isVisible ? 0 : -16,
						}}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
					>
						{name}.
					</motion.span>
				</div>
			) : (
				<span>{name}.</span>
			)}
		</>
	);
}
