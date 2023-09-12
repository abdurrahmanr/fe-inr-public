import { Link, Outlet, useLocation } from 'react-router-dom';
import { links } from '../constants';
import Carousel from '../components/profile/Carousel';
import { boldNoRuin } from '../utils';

const ProfileLayout = () => {
	const location = useLocation();

	const struktur = location.pathname.includes('struktur-organisasi');

	return (
		<div className={`${struktur ? 'grid-cols-11' : 'grid-cols-12'} grid  gap-x-0`}>
			<div className='col-span-full mt-20 lg:col-span-9'>
				<Outlet />
			</div>
			<div className={`${struktur ? 'lg:col-span-2' : 'lg:col-span-3'} col-span-full hidden text-secondary lg:block`}>
				<div className='ms-auto w-fit'>
					<p className='text-xl font-medium'>Profile</p>
					<div className='mt-10 flex flex-col gap-9'>
						{links[1].options.map((data) => (
							<Link
								to={data}
								key={data}
								className={`${location.pathname.match(data)
									? 'font-medium'
									: 'text-greyCol'
									} text-xs capitalize ${boldNoRuin}`}
							>
								{data === 'struktur-organisasi'
									? data
									: data + ' Inready workgroup'}
							</Link>
						))}
					</div>
				</div>
			</div>
			<div
				className={`${struktur
					? 'hidden'
					: ''
					} -sm:mx-10 col-span-full -mx-5 h-full xl:-mx-[156px] 2xl:-mx-[348px]`}
			>
				<Carousel />
			</div>
		</div>
	);
};

export default ProfileLayout;
