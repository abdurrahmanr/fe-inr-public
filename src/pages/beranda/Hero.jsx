import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { Navigation, Pagination, Keyboard, EffectFade, Autoplay } from 'swiper/modules';

const Hero = () => {

    return (
        <div className='relative h-[calc(100vh_-_80px)] bg-primary'>
            <Swiper
                loop={true}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                navigation={true}
                effect={'fade'}
                keyboard={true}
                modules={[Navigation, Pagination, Keyboard, EffectFade, Autoplay]}
                pagination={{
                    clickable: true,
                    el: '.pagination',
                }}
                slidesPerView={1}
                className="h-full mySwipe"
            >
                {
                    [1, 2].map((data) => (
                        <SwiperSlide key={data} className='grid items-center grid-cols-2'>
                            {({ isActive }) => (
                                <>
                                    <div className='flex items-end w-full h-full col-span-full lg:col-span-1'>
                                        <div className='overflow-hidden w-full h-4/5 relative rounded-tl-[63px]'>
                                            <img src={'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'} alt="" className={`${isActive ? 'scale-125' : 'scale-100'} object-cover w-full h-full transition-transform duration-[5000ms] ease-in-out`} />
                                        </div>
                                    </div>
                                    <div className={`${isActive ? 'opacity-100 -translate-y-3 transition-transform duration-1000 ease-in-out' : 'opacity-0'} flex flex-col justify-center w-full h-full px-32 -order-1 gap-7 text-greyCol text-xs col-span-full lg:col-span-1`}>
                                        <p>31 Oktober 2022</p>
                                        <p className={`text-3xl font-bold text-yellowSecondary tracking-[1.2px]`}>
                                            KESERUAN OUTDOOR INREADY WORKGROUP
                                        </p>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        <p className='text-white'>Selengkapnya</p>
                                    </div>
                                </>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    );
}

export default Hero;