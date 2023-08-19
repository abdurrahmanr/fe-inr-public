import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@radix-ui/react-icons';

const Breadcrumb = () => {
    const location = useLocation()
    let currentLink = ''

    const isInteger = (string) => {
        const number = +string;
        return number;
    }

    const bread = location.pathname.split('/')
        .filter(bread => bread != '')
        .map((bread, index, arr) => {
            currentLink += `/${bread}`

            return (
                <div key={bread} className={`flex items-center ${index + 1 == arr.length ? 'text-greyCol' : 'text-greyCol text-opacity-50'} hover:text-opacity-100 text-xs gap-2`}>
                    <ChevronRightIcon className='w-4 h-10 font-bold' />
                    <Link className={`capitalize font-medium`} to={currentLink}>{isInteger(bread) ? `Detail ${arr[0]}` : bread}</Link>
                </div>
            )
        })

    return (
        <div className='flex items-center gap-2 pt-8'>
            <Link to='/' className='flex items-center gap-4 text-xs font-medium text-opacity-50 text-greyCol hover:text-opacity-100'>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 9.99985L9.293 0.706849C9.6835 0.316467 10.3165 0.316467 10.707 0.706849L20 9.99985H18V17.9998C18 18.5521 17.5523 18.9998 17 18.9998H12V11.9998H8V18.9998H3C2.44772 18.9998 2 18.5521 2 17.9998V9.99985H0Z" fill="#FFC400" />
                </svg>
                Beranda
            </Link>
            {bread}
        </div>
    );
}

export default Breadcrumb;