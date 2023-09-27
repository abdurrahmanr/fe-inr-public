import StrukturCard from './StrukturCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const StrukturList = ({ title, data, divisi }) => {
	return (
		<div className='mt-10 h-full w-full'>
			{!divisi ? (
				<>
					<p className='capitalize text-secondary w-full'>{title}</p>
					<div className='w-full overflow-x-scroll'>
						<div className='mt-10 grid lg:grid-cols-12 gap-x-12 gap-y-6 lg:px-0 w-fit lg:grid-flow-row grid-flow-col overflow-x-scroll auto-cols-max'>
							{data?.map((profile, index) => (
								<div key={index} className='col-span-4 first:ms-5'>
									<StrukturCard {...profile} />
								</div>
							))}
						</div>
					</div>
				</>
			) : (
				<div className='mt-14'>
					<p className='mb-8 text-sm text-yellowSecondary'>
						Divisi yang dinaungi oleh {title}
					</p>
					{data?.map((division, index) => {
						return (
							<div className='overflow-visible relative' key={index}>
								<p className='text-xs capitalize text-greyCol'>
									Divisi {division.name === 'Biarawati' ? 'Keajian' : division.name}
								</p>
								<div className='grid -ml-[5vw] lg:ml-0 grid-flow-row grid-cols-12 py-10 overflow-hidden lg:w-[calc(100%+25.95vw)] gap-y-10 lg:gap-y-0 -mx-5'>
									<div className='col-span-full lg:col-span-2 mx-auto lg:mx-0'>
										<StrukturCard position='ketua divisi' name={division.members[0]?.name} concentration={division.members[0]?.concentration} />
									</div>
									<div className='col-span-full col-start-1 h-full w-full lg:col-start-5 !overflow-hidden'>
										<Swiper
											spaceBetween={24}
											slidesPerView={'auto'}
											navigation
											className='test h-full w-full select-none'
											modules={[Navigation]}
											// slidesOffsetAfter={750}
											centeredSlides={true}
											grabCursor
											freeMode={true}
											breakpoints={
												{
													1024: {
														centeredSlides: false,
														slidesOffsetAfter: 250
													}
												}
											}
										>
											{division?.members?.map((member, index) => {
												if (member.is_division_head === '1') {
													return;
												}

												return (
													<SwiperSlide key={index} className='h-full !w-fit'>
														<StrukturCard {...member} />
													</SwiperSlide>
												);
											})}
										</Swiper>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			)}
		</div>
	);
};

export default StrukturList;
