import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import carousel1 from '../../assets/img/carousel1.jpeg';
import carousel2 from '../../assets/img/carousel2.jpeg';
import carousel3 from '../../assets/img/carousel3.jpeg';
import carousel4 from '../../assets/img/carousel4.jpeg';
import carousel5 from '../../assets/img/carousel5.jpeg';

import { Pagination, Keyboard, Autoplay, EffectCreative } from 'swiper/modules';

const datas = [
    {
        id: 1,
        image: carousel1
    },
    {
        id: 2,
        image: carousel2
    },
    {
        id: 3,
        image: carousel3
    },
    {
        id: 4,
        image: carousel4
    },
    {
        id: 5,
        image: carousel5
    },
    {
        id: 1,
        image: carousel1
    },
    {
        id: 2,
        image: carousel2
    },
    {
        id: 3,
        image: carousel3
    },
    {
        id: 4,
        image: carousel4
    },
    {
        id: 5,
        image: carousel5
    },
]

const Carousel = () => {
    return (
        <Swiper
            loop={true}
            effect={'creative'}
            keyboard={true}
            oneWayMovement={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            creativeEffect={{
                limitProgress: 4,
                prev: {
                    scale: 0.85,
                    translate: ["-95%", 0, 0],
                    origin: 'left center'
                },
                next: {
                    scale: 0.85,
                    translate: ['95%', 0, 0],
                    origin: 'right center'
                },
            }}
            spaceBetween={10}
            slidesPerView={4.25}
            modules={[Pagination, Keyboard, Autoplay, EffectCreative]}
            centeredSlides={true}
            speed={1200}
            className='w-full mySwipe h-[300px]'
        >
            {
                datas.map((data) => (
                    <SwiperSlide key={data.id} className='flex items-center justify-center h-full'>
                        {({ isActive }) => (
                            <div className={`!w-[500px] aspect-video`}>
                                <img src={data.image} alt="" className='object-cover w-full h-full' />
                            </div>
                        )}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default Carousel;