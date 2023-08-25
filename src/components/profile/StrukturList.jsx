import StrukturCard from './StrukturCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const StrukturList = ({ title, datas, divisi }) => {
	return (
		<div className='mt-10 h-full w-full'>
			{!divisi ? (
				<>
					<p className='capitalize text-secondary'>{title}</p>
					<div className='mt-10 grid grid-cols-12 gap-x-12 px-10 lg:px-0'>
						{datas?.map((data, index) => (
							<div key={index} className='col-span-4'>
								<StrukturCard />
							</div>
						))}
					</div>
				</>
			) : (
				<div className='mt-14'>
					<p className='mb-8 text-sm text-yellowSecondary'>
						Divisi yang dinaungi oleh Wakil 1 (Internal)
					</p>
					<div>
						<p className='text-xs capitalize text-greyCol'>
							Divisi Keorganisasian
						</p>
						<div className='grid w-full grid-flow-col grid-cols-12 py-10 lg:w-[calc(100%+500px)]'>
							<div className='col-span-full lg:col-span-2'>
								<StrukturCard />
							</div>
							<div className='col-span-full col-start-1 h-full w-full lg:col-start-5'>
								<Swiper
									spaceBetween={24}
									slidesPerView={3.5}
									navigation
									className='test h-full w-full select-none'
									modules={[Navigation]}
									slidesOffsetAfter={125}
									grabCursor
								>
									<SwiperSlide className='h-full w-full'>
										<StrukturCard />
									</SwiperSlide>
									<SwiperSlide className='h-full w-full'>
										<StrukturCard />
									</SwiperSlide>
									<SwiperSlide className='h-full w-full'>
										<StrukturCard />
									</SwiperSlide>
									<SwiperSlide className='h-full w-full'>
										<StrukturCard />
									</SwiperSlide>
									<SwiperSlide className='h-full w-full'>
										<StrukturCard />
									</SwiperSlide>
									<SwiperSlide className='h-full w-full'>
										<StrukturCard />
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default StrukturList;
