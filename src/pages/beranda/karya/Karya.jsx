import Button from '../../../components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { Navigation, Pagination, Keyboard, Autoplay, EffectCreative } from 'swiper/modules';
import arrowRight from '../../../assets/icons/arrow-right.svg'
import carouselImg from '../../../assets/img/kegiatan.png'
import { Link } from 'react-router-dom';

const Karya = () => {

    return (
        <div className='grid items-center justify-center h-[708px] grid-cols-5 text-white lg:flex-row bg-secondary'>
            <div className='w-full lg:col-span-2 col-span-full'>
                <div className='flex flex-col w-fit px-36'>
                    <p className='text-2xl font-bold text-primary'>Karya Inready Workgroup</p>
                    <p className='text-xs mt-7'>Dengan Hitam Emas Kita Berkarya</p>
                    <Button title='Selengkapnya' link='/karya' />
                </div>
            </div>
            <div className='relative w-full lg:col-span-3 col-span-full'>
                <Swiper
                    loop={true}
                    navigation={true}
                    effect={'creative'}
                    keyboard={true}
                    modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCreative]}
                    pagination={{
                        clickable: true,
                        el: '.pagination',
                    }}
                    oneWayMovement={true}
                    creativeEffect={{
                        limitProgress: 2,
                        prev: {
                            scale: 0.85,
                            translate: ["-95%", 0, 0],
                            origin: 'left top'
                        },
                        next: {
                            scale: 0.85,
                            translate: ['95%', 0, 0],
                            origin: 'right top'
                        },
                    }}
                    slidesPerView={2}
                    spaceBetween={24}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={1200}
                    className="mySwipe"
                >
                    {
                        [1, 2, 3, 4, 5].map((data) => (
                            <SwiperSlide key={data} className={`flex items-center h-full relative`}>
                                {({ isActive }) => (
                                    <>
                                        <div className={`text-primary w-[404px] h-[582px] rounded-[20px] overflow-hidden transition-all delay-500`}>
                                            <img src={carouselImg} alt="" className='object-cover h-full' />
                                        </div>
                                        <div className={`${isActive ? 'opacity-100 -translate-y-7 translate-x-7' : 'opacity-0'} absolute bg-white bottom-0 left-0 rounded-[10px] py-6 w-[217px] text-secondary backdrop-blur-[1.5px] bg-opacity-75 transition-all duration-1000`}>
                                            <div className='flex flex-col gap-3 ml-7'>
                                                <p className='text-xs font-medium text-greyCol'>Website</p>
                                                <p className='text-xs font-semibold'>Karya terbaik</p>
                                                <Link to='/karya' className='absolute w-12 h-12 -right-6 -bottom-2 bg-primary rounded-[10px] flex items-center justify-center'>
                                                    <img src={arrowRight} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="absolute !right-[150px] z-10 !bottom-[50px] ms-auto pagination text-primary !w-fit"></div>
            </div>
        </div >
    );
}

export default Karya;