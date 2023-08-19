import StrukturCard from './StrukturCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const StrukturList = ({ title, datas, divisi }) => {
    return (
        <div className='w-full mt-10 h-full'>
            {!divisi ? (
                <>
                    <p className='text-secondary capitalize'>{title}</p>
                    <div className='grid grid-cols-12 px-10 mt-10 gap-x-12 lg:px-0'>
                        {datas?.map((data, index) => (
                            <div key={index} className='col-span-4'>
                                <StrukturCard />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className='mt-14'>
                    <p className='mb-8 text-sm text-yellowSecondary'>Divisi yang dinaungi oleh Wakil 1 (Internal)</p>
                    <div>
                        <p className='text-xs text-greyCol capitalize'>Divisi Keorganisasian</p>
                        <div className='grid grid-cols-12 py-10 w-[calc(100%+500px)] grid-flow-col'>
                            <div className='lg:col-span-2'>
                                <StrukturCard />
                            </div>
                            <div className='col-start-1 lg:col-start-5 w-full col-span-full h-full'>
                                <Swiper
                                    spaceBetween={24}
                                    slidesPerView={3.5}
                                    className='w-full h-full'
                                    navigation={{
                                        nextEl: '.next'
                                    }}
                                    modules={[Navigation]}
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
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

            )
            }
        </div >
    );
}

export default StrukturList;