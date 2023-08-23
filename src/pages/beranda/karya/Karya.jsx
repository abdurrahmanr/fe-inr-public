import Button from '../../../components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import {
	Navigation,
	Pagination,
	Keyboard,
	Autoplay,
	EffectCreative,
} from 'swiper/modules';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import carouselImg from '../../../assets/img/kegiatan.png';
import { Link } from 'react-router-dom';

const Karya = () => {
	return (
		<div className='grid h-[708px] grid-cols-5 items-center justify-center bg-secondary text-white lg:flex-row'>
			<div className='col-span-full w-full lg:col-span-2'>
				<div className='flex w-fit flex-col px-12 lg:px-36'>
					<p className='text-2xl font-bold text-primary'>
						Karya Inready Workgroup
					</p>
					<p className='mt-7 text-xs'>
						Dengan Hitam Emas Kita Berkarya
					</p>
					<Button title='Selengkapnya' link='/karya' />
				</div>
			</div>
			<div className='relative col-span-full w-full lg:col-span-3'>
				<Swiper
					loop={true}
					navigation={true}
					effect={'creative'}
					keyboard={true}
					modules={[
						Navigation,
						Pagination,
						Keyboard,
						Autoplay,
						EffectCreative,
					]}
					pagination={{
						clickable: true,
						el: '.pagination',
					}}
					creativeEffect={{
						limitProgress: 2,
						prev: {
							scale: 0.85,
							translate: ['-95%', 0, 0],
							origin: 'left top',
						},
						next: {
							scale: 0.85,
							translate: ['95%', 0, 0],
							origin: 'right top',
						},
					}}
					breakpoints={{
						1024: {
							slidesPerView: 2,
						},
					}}
					slidesPerView={1}
					spaceBetween={24}
					shortSwipes={false}
					// autoplay={{
					//     delay: 2500,
					//     disableOnInteraction: false,
					// }}
					speed={1200}
					grabCursor
				>
					{[1, 2, 3, 4, 5].map((data) => (
						<SwiperSlide
							key={data}
							className='flex h-[290px] w-[404px] justify-center lg:h-[582px]'
						>
							{({ isActive }) => (
								<div className='relative h-full w-2/3 lg:w-full'>
									<div className='flex h-full w-full overflow-hidden rounded-[20px]'>
										<img
											src={carouselImg}
											alt=''
											className='h-full w-full object-cover'
										/>
									</div>
									<div
										className={`${
											isActive
												? '-translate-y-7 translate-x-7 opacity-100'
												: 'opacity-0'
										} absolute bottom-0 left-0 w-2/3 rounded-[10px] bg-white bg-opacity-75 py-6 text-secondary backdrop-blur-[1.5px] transition-all duration-1000 md:w-1/2 lg:w-[217px]`}
									>
										<div className='ml-7 flex flex-col gap-3'>
											<p className='text-xs font-medium text-greyCol'>
												Website
											</p>
											<p className='text-xs font-semibold'>
												Karya terbaik
											</p>
											<Link
												to='/karya'
												className='absolute -bottom-2 -right-6 flex h-12 w-12 items-center justify-center rounded-[10px] bg-primary'
											>
												<img src={arrowRight} alt='' />
											</Link>
										</div>
									</div>
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
				<div className='pagination absolute !bottom-[50px] !right-[150px] z-10 ms-auto !w-fit text-primary'></div>
			</div>
		</div>
	);
};

export default Karya;
