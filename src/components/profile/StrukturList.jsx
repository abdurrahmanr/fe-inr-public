import StrukturCard from './StrukturCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

const StrukturList = ({ title, data, divisi, division }) => {
	return (
		<div className='mt-10 h-full w-full'>
			{!divisi ? (
				<>
					<p className='capitalize text-secondary w-full'>{title}</p>
					<div className='w-full overflow-x-scroll'>
						<div className='mt-10 grid lg:grid-cols-12 gap-x-12 gap-y-6 px-10 lg:px-0 w-fit lg:grid-flow-row grid-flow-col overflow-x-scroll auto-cols-max'>
							{data?.map((profile, index) => (
								<div key={index} className='col-span-4'>
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
							<div className='' key={index}>
								<p className='text-xs capitalize text-greyCol'>
									Divisi {division.name === 'Biarawati' ? 'Keajian' : division.name}
								</p>
								<div className='grid -ml-[5vw] lg:ml-0 grid-flow-row grid-cols-12 py-10 overflow-hidden lg:w-[calc(100%+40vw)] xl:w-[calc(100%+50vw]'>
									<div className='col-span-full lg:col-span-2'>
										<StrukturCard position='ketua divisi' name={division.members[0]?.name} concentration={division.members[0]?.concentration} />
									</div>
									<div className='col-span-full col-start-1 h-full w-full lg:col-start-5 !overflow-hidden'>
										<Swiper
											spaceBetween={24}
											slidesPerView={3.5}
											navigation
											className='test h-full w-full select-none'
											modules={[Navigation]}
											slidesOffsetAfter={125}
											grabCursor
										>
											{division?.members?.map((member, index) => {
												if (member.is_division_head === '1') {
													return 0;
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
