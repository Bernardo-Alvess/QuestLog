import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

import { Card } from './card';

interface ICardsProps {
	theme: string;
}

export function Cards({ theme }: ICardsProps) {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const url = '../src/assets/black-myth-wukong-hero.png';

	return (
		<div className="flex items-center justify-center bg-black-900">
			<div className="md:h-[400px] w-11/12 bg-inherit pt-7 bg-black-900 flex justify-center items-center relative">
				<h1 className="text-white font-bold absolute top-0 md:text-2xl">
					{theme}
				</h1>
				<ChevronLeft
					ref={prevRef}
					className="text-white w-[75px] h-[75px] cursor-pointer absolute left-0 z-10 swiper-button-prev hidden md:block"
				/>
				<Swiper
					modules={[Navigation]}
					spaceBetween={12}
					slidesPerView={'auto'}
					navigation={{
						nextEl: nextRef.current,
						prevEl: prevRef.current,
					}}
					onInit={(swiper) => {
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					className="w-full px-3 flex justify-center items-center rounded-xl"
				>
					<SwiperSlide className="w-[100px] h-[150px] md:w-[250px] md:h-[350px]">
						<Card imageUrl={url}></Card>
					</SwiperSlide>

					<SwiperSlide className="w-[100px] h-[150px] md:w-[250px] md:h-[350px]">
						<Card imageUrl={url} />
					</SwiperSlide>
					<SwiperSlide className="w-[100px] h-[150px] md:w-[250px] md:h-[350px]">
						<Card imageUrl={url} />
					</SwiperSlide>
					<SwiperSlide className="w-[100px] h-[150px] md:w-[250px] md:h-[350px]">
						<Card imageUrl={url} />
					</SwiperSlide>
					<SwiperSlide className="w-[100px] h-[150px] md:w-[250px] md:h-[350px]">
						<Card imageUrl={url} />
					</SwiperSlide>
					<SwiperSlide className="w-[100px] h-[150px] md:w-[250px] md:h-[350px]">
						<Card imageUrl={url} />
					</SwiperSlide>
					<SwiperSlide className="w-[100px] h-[150px] md:w-[250px] md:h-[350px]">
						<Card imageUrl={url} />
					</SwiperSlide>
				</Swiper>
				<ChevronRight
					ref={nextRef}
					className="text-white w-[75px] h-[75px] cursor-pointer absolute right-0 z-10 swiper-button-next hidden md:block"
				/>
			</div>
		</div>
	);
}
