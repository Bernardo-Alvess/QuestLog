export function FeaturedGame() {
	return (
		<div className="relative w-full h-[200px] md:h-[400px] lg:h-[600px] bg-[url('../src/assets/random-game-image.png')] bg-no-repeat bg-cover">
			<div className="absolute inset-0 flex items-center justify-center text-white z-10">
				<div className="text-center leading-relaxed flex flex-col gap-2">
					<h1 className="font-bold text-lg md:text-2xl lg:text-5xl max-w-[400px]">
						"No, Bane! This Time I Break You!"
					</h1>
					<p className="font-sm md:font-medium text-gray-300">
						Batman: Arkham Asylum
					</p>
				</div>
			</div>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-900" />
		</div>
	);
}
