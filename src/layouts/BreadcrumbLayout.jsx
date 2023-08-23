import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const BreadcrumbLayout = () => {
	return (
		<div className='mx-5 flex h-fit flex-col sm:mx-10 xl:mx-[156px] 2xl:mx-[348px]'>
			<Breadcrumb />
			<Outlet />
		</div>
	);
};

export default BreadcrumbLayout;
