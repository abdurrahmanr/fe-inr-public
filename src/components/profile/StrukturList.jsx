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
					<p className='capitalize text-secondary'>{title}</p>
					<div className='mt-10 grid grid-cols-12 gap-x-12 gap-y-6 px-10 lg:px-0'>
						{data?.map((profile, index) => (
							<div key={index} className='col-span-4'>
								<StrukturCard name={profile.name} position={profile.position} />
							</div>
						))}
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
								<div className='grid w-full grid-flow-row grid-cols-12 py-10 overflow-hidden lg:w-[calc(100%+500px)] 2xl:w-[calc(100%+700px)]'>
									<div className='col-span-full lg:col-span-2'>
										<StrukturCard position='ketua divisi' name={division.members[0]?.name} />
									</div>
									<div className='col-span-full col-start-1 h-full w-full lg:col-start-5 overflow-hidden'>
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
													<SwiperSlide key={index} className='h-full w-full'>
														<StrukturCard name={member.name} />
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
