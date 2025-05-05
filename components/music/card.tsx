interface Album {
	artist: string;
	name: string;
	coverImage: string;
	href: string;
}

export const AlbumCard = ({ artist, name, coverImage, href }: Album) => {
	return (
		<a
			href={href}
			rel="noopener noreferrer"
			target="_blank"
			className="transition duration-300 ease-in-out group transform hover:scale-[103.5%] relative flex items-end	h-32 w-32 xs:h-48 xs:w-48 md:h-64 md:w-64 bg-no-repeat bg-cover rounded-md shadow-md"
		>
			<div
				className="transition duration-300 ease-in-out group-hover:opacity-40 opacity-100 rounded-md bg-cover absolute w-full h-full"
				style={{ backgroundImage: `url('${coverImage}')` }}
			></div>
			<div className="transition duration-300 ease-in-out group-hover:opacity-100 opacity-0 p-4 z-40 font-bold">
				<h1 className="font-bold text-2xl capitalize">{artist}</h1>
				<p className="font-medium text-sm capitalize">{name}</p>
			</div>
		</a>
	);
};
