import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import heroImage from '../../assets/img/hero.jpeg';
import {
	Navigation,
	Pagination,
	Keyboard,
	EffectFade,
	Autoplay,
} from 'swiper/modules';

const Hero = () => {
	return (
		<div className='relative h-[calc(100vh_-_80px)] bg-primary'>
			<Swiper
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				navigation={true}
				effect={'fade'}
				keyboard={true}
				modules={[
					Navigation,
					Pagination,
					Keyboard,
					EffectFade,
					Autoplay,
				]}
				pagination={{
					clickable: true,
					el: '.pagination',
				}}
				slidesPerView={1}
				className='mySwipe h-full'
			>
				{[1, 2].map((data) => (
					<SwiperSlide
						key={data}
						className='grid grid-cols-2 items-center'
					>
						{({ isActive }) => (
							<>
								<div className='col-span-full flex h-full w-full items-end lg:col-span-1'>
									<div className='relative h-4/5 w-full overflow-hidden rounded-tl-[63px]'>
										<img
											src={heroImage}
											alt=''
											className={`${
												isActive
													? 'scale-125'
													: 'scale-100'
											} h-full w-full object-cover transition-transform duration-[5000ms] ease-in-out`}
										/>
									</div>
								</div>
								<div
									className={`${
										isActive
											? '-translate-y-3 opacity-100 transition-transform duration-1000 ease-in-out'
											: 'opacity-0'
									} -order-1 col-span-full flex h-full w-full flex-col justify-center gap-7 px-32 text-xs text-greyCol lg:col-span-1`}
								>
									<p>31 Oktober 2022</p>
									<p
										className={`text-3xl font-bold tracking-[1.2px] text-yellowSecondary`}
									>
										KESERUAN OUTDOOR INREADY WORKGROUP
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur.
									</p>
									<p className='text-white underline'>
										Selengkapnya
									</p>
								</div>
							</>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
