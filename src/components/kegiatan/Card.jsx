import kegiatanImg from '../../assets/img/kegiatan.png';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div
            className='group relative w-full max-w-[250px] overflow-hidden rounded-primary bg-primary'
        >
            <div className='h-72'>
                <img
                    src={kegiatanImg}
                    alt=''
                    className='h-full w-full object-cover transition-all duration-1000 group-hover:scale-125'
                />
            </div>
            <div className='absolute inset-0 flex h-full w-full items-end justify-center transition-colors duration-500 group-hover:bg-primary/10'>
                <div className='mb-4 text-white'>
                    <p className='font-semibold'>
                        Sosialsiasi
                    </p>
                    <p className='mt-1 text-[10px] leading-4'>
                        Tahap Perekrutan
                    </p>
                    <Link
                        to={`${1}`}
                        className='mt-3 block rounded-small bg-white px-6 py-4 text-sm font-medium leading-none text-yellowSecondary'
                    >
                        Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;