import { Search } from 'lucide-react';

export function SearchBar() {
	return (
		<>
			<div className="flex items-center bg-black-600 rounded-[28px] p-3 min-w-[200px] max-w-[350px] md:w-[350px]">
				<input
					type="text"
					autoComplete="off"
					placeholder="Search for a game"
					className="bg-transparent w-full outline-none text-white text-sm"
				/>
				<Search className="text-white" />
			</div>
		</>
	);
}
