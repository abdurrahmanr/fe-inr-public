import heroAbout from '../../assets/img/heroAbout.jpeg';
import Button from '../../components/Button';
import { underlineTitle } from '../../utils/index';

const Tentang = () => {
	return (
		<div className='my-36 flex w-full flex-col items-center justify-center'>
			<div className='w-3/4 lg:w-1/2'>
				<div className=' w-full overflow-hidden rounded-[20px] shadow-xl lg:w-full'>
					<img src={heroAbout} alt='' loading='lazy' className='h-full w-full' />
				</div>

				<div className='mt-[91px] flex w-full flex-col items-center gap-[60px] lg:flex-row'>
					<p className='text-2xl font-bold leading-[38px] text-primary'>
						Apa itu Inready Workgroup?
					</p>
					<div className='flex flex-col'>
						<p
							className={`text-xl font-semibold ${underlineTitle}`}
						>
							Tentang Inready Workgroup
						</p>
						<p className='mt-7 text-justify text-xs leading-5 text-greyCol'>
							Inready Workgroup merupakan salah satu organisasi
							yang ada di Universitas Islam Negeri Alauddin
							Makassar yang didirikan pada tahun 2007, bertujuan
							untuk mengembangkan wawasan dan kemampuan baik itu
							dalam bidang IT maupun keorganisasian anggotanya....
						</p>
						<Button title='Selengkapnya' link='/profile/tentang' className='bg-primary px-6' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tentang;
