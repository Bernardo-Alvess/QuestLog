import { Cards } from '../components/cards';
import { FeaturedGame } from '../components/featured-game';
import { Header } from '../components/header';

export function Home() {
	return (
		<>
			<Header />
			<FeaturedGame />
			<Cards theme="Latest" />
		</>
	);
}
