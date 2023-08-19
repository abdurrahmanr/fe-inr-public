import StrukturCard from './StrukturCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

const StrukturList = ({ title, datas, divisi }) => {
    return (
        <div className='w-full my-10'>
            {!divisi ? (
                <>
                    <p className='text-secondary'>{title}</p>
                    <div className='grid grid-cols-12 px-10 mt-10 gap-x-12 lg:px-0'>
                        {datas?.map((data) => (
                            <div key={data} className='col-span-4'>
                                <StrukturCard />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className='py-10'>
                    <p>Divisi yang dinaungi oleh Wakil 1 (Internal)</p>
                    <p>Divisi Keorganisasian</p>
                    {/* <div className='grid w-screen grid-cols-12 py-10 xl:-mr-[156px] 2xl:-mr-[348px]'>
                        <div className='h-full col-span-full lg:col-span-4'>
                            <StrukturCard />
                        </div>
                        <div className='col-start-1 lg:col-start-7 w-fit'>
                            <Swiper
                                spaceBetween={25}
                                slidesPerView={3}
                                className='flex-shrink-0 w-fit'
                                navigation={{
                                    nextEl: '.next'
                                }}
                                modules={[Navigation]}
                            >
                                <SwiperSlide className='w-fit h-fit'>
                                    <StrukturCard />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div> */}
                </div>
            )
            }
        </div >
    );
}

export default StrukturList;