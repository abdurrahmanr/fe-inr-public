import pengurus from '../../assets/img/pengurus.png';
import fbLogo from '../../assets/icons/fb.svg';
import twitterLogo from '../../assets/icons/twitter.svg';
import igLogo from '../../assets/icons/ig.svg';
import { Link } from 'react-router-dom';

const StrukturCard = ({ name, position = 'anggota' }) => {
	return (
		<div className='grid h-full w-full max-w-[243px] grid-cols-12 overflow-hidden rounded-primary border border-greyCol/20 flex-shrink-0'>
			<div className='col-span-full flex h-[158px] w-full justify-center overflow-visible bg-primary'>
				<img src={pengurus} alt='' className='h-full w-1/2 object-cover' />
			</div>
			<div className='col-span-full h-full overflow-hidden bg-white px-5 py-3 text-xs capitalize'>
				<div className='flex flex-col gap-[6px] text-left'>
					<p className='text-right text-[10px]'>{position}</p>
					<p className='font-semibold'>{name}</p>
					<p className=''>Mahasiswa</p>
					<p className='text-justify text-[10px] leading-3 tracking-tighter text-greyCol/50'>
						There are many variations of passages of Lorem Ipsum
						available
					</p>
				</div>
				<div className='mt-4 flex gap-1'>
					<div className='flex items-center justify-center rounded-full bg-[#F2F4F7] px-[8px] py-[4px]'>
						<Link
							to='https://www.instagram.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src={igLogo} alt='' />
						</Link>
					</div>
					<div className='flex items-center justify-center rounded-full bg-[#F2F4F7] px-[8px] py-[4px]'>
						<Link
							to='https://www.twitter.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src={twitterLogo} alt='' />
						</Link>
					</div>
					<div className='flex items-center justify-center rounded-full bg-[#F2F4F7] p-[6px]'>
						<Link
							to='https://www.facebook.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src={fbLogo} alt='' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StrukturCard;
