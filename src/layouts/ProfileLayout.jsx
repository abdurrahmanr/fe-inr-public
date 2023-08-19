import { Link, Outlet, useLocation } from 'react-router-dom';
import { links } from '../constants'
import Carousel from '../components/profile/Carousel';

const ProfileLayout = () => {
    const location = useLocation()

    return (
        <div className='grid grid-cols-12 gap-x-0 lg:gap-x-0'>
            <div className='mt-20 col-span-full lg:col-span-9'>
                <Outlet />
            </div>
            <div className='col-span-full lg:col-span-3 text-secondary'>
                <div className='w-fit ms-auto'>
                    <p className='text-xl font-medium'>Profile</p>
                    <div className='flex flex-col mt-10 gap-9'>
                        {
                            links[1].options.map((data) => (
                                <Link to={data} key={data} className={`${location.pathname.match(data) ? 'font-medium' : 'text-greyCol'} text-xs capitalize`}>{data === 'struktur-organisasi' ? data : data + ' Inready workgroup'}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={`${location.pathname.includes('struktur-organisasi') ? 'hidden' : ''} col-span-full -mx-5 -sm:mx-10 xl:-mx-[156px] 2xl:-mx-[348px]`}>
                <Carousel />
            </div>
        </div>
    );
}

export default ProfileLayout;