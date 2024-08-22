import { CircleUser } from 'lucide-react';
import { SearchBar } from './search-bar';

export function Header() {
	return (
		<header className="w-full flex justify-between items-center p-3 bg-black-900 text-white">
			<div className="flex items-center space-x-4 md:space-x-8">
				<h1 className="text-base md:text-lg font-bold hidden sm:block">
					QuestLog
				</h1>
				<h1 className="text-base sm:hidden font-bold">QL</h1>
				<nav className="hidden md:flex space-x-2 md:space-x-3 md:font-medium font-norml text-xs sm:text-sm items-center text-center pr-2">
					<a href="#" className="hover:underline">
						FAVORITES
					</a>
					<a href="#" className="hover:underline">
						YOUR REVIEWS
					</a>
					<a href="#" className="hover:underline">
						TO BE PLAYED
					</a>
				</nav>
			</div>
			<div className="flex items-center gap-2 md:gap-5">
				<SearchBar />
				<CircleUser className="text-white w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
			</div>
		</header>
	);
}
