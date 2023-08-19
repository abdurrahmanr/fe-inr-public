import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const BreadcrumbLayout = () => {
    return (
        <div className='flex flex-col mx-5 sm:mx-10 xl:mx-[156px] 2xl:mx-[348px] h-fit'>
            <Breadcrumb />
            <Outlet />
        </div>
    );
}

export default BreadcrumbLayout;