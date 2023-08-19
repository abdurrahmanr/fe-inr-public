import { Link } from "react-router-dom";

const Button = ({ title, className, link }) => {
    return (
        <Link to={link} className='mt-6 h-fit w-fit'>
            <div className={`bg-primary px-6 py-4 rounded-md w-fit text-white flex justify-center items-center hover:bg-gradient-to-r hover:from-[#ffffff4d] hover:to-[#ffffff4d] ${className}`}>
                {title}
            </div>
        </Link>
    );
}

export default Button;