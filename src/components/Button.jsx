import { Link } from 'react-router-dom';

const Button = ({ title, className, link }) => {
	return (
		<Link to={link} className='mt-6 h-fit w-fit'>
			<div
				className={`flex w-fit items-center justify-center rounded-md bg-primary px-6 py-4 text-white hover:bg-gradient-to-r hover:from-[#ffffff4d] hover:to-[#ffffff4d] ${className}`}
			>
				{title}
			</div>
		</Link>
	);
};

export default Button;
