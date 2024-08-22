interface ICardProps {
	imageUrl: string;
}

export function Card({ imageUrl }: ICardProps) {
	return (
		<>
			<div
				className={`bg-black-600 w-full h-full rounded-xl bg-[url('${imageUrl}')] bg-cover bg-no-repeat text-white flex justify-center items-center font-bold text-3xl`}
			>
				<h1>!</h1>
			</div>
		</>
	);
}
