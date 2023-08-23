import { Link, Outlet, useLocation } from 'react-router-dom';
import { links } from '../constants';
import Carousel from '../components/profile/Carousel';

const ProfileLayout = () => {
	const location = useLocation();

	return (
		<div className='grid grid-cols-12 gap-x-0 lg:gap-x-0'>
			<div className='col-span-full mt-20 lg:col-span-9'>
				<Outlet />
			</div>
			<div className='col-span-full hidden text-secondary lg:col-span-3 lg:block'>
				<div className='ms-auto w-fit'>
					<p className='text-xl font-medium'>Profile</p>
					<div className='mt-10 flex flex-col gap-9'>
						{links[1].options.map((data) => (
							<Link
								to={data}
								key={data}
								className={`${
									location.pathname.match(data)
										? 'font-medium'
										: 'text-greyCol'
								} text-xs capitalize`}
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
				className={`${
					location.pathname.includes('struktur-organisasi')
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
