import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const MainLayout = () => {
	return (
		<div className='w-full'>
			<ScrollRestoration />
			<Nav />
			<div className='pt-[80px]'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
