import Button from '../../components/Button';
// import mobileIcon from '../../assets/icons/mobile.svg';
// import designIcon from '../../assets/icons/design.svg';
import webIcon from '../../assets/icons/web.svg';
import SEOComponent from '../../components/SEO';

const Tentang = () => {
	return (
		<>
			<SEOComponent title={'Tentang | Inready Workgroup'} />
			<div className='w-full text-justify'>
				<p className='text-left text-2xl font-medium text-secondary'>
					Tentang Inready Workgroup
				</p>
				<div className='mt-9 flex flex-col gap-9 text-xs text-greyCol indent-[35px]'>
					<p>
						Inready Workgroup merupakan salah satu organisasi yang
						ada di Universitas Islam Negeri Alauddin Makassar yang
						didirikan pada tahun 2007, bertujuan untuk mengembangkan
						wawasan dan kemampuan baik itu dalam bidang IT maupun
						keorganisasian anggotanya.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur. A at libero orci
						luctus sollicitudin posuere lectus libero pellentesque.
						Tempus tellus urna mauris molestie purus donec egestas.
						Morbi quisque magna lobortis urna fringilla eget sed
						etiam. Adipiscing etiam cursus nisl integer sociis augue
						eget donec. Lorem ipsum dolor sit amet consectetur. A at
						libero orci luctus sollicitudin posuere lectus libero
						pellentesque. Tempus tellus urna mauris molestie purus
						donec egestas. Morbi quisque magna lobortis urna
						fringilla eget sed etiam. Adipiscing etiam cursus nisl
						integer sociis augue eget donec.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur. A at libero orci
						luctus sollicitudin posuere lectus libero pellentesque.
						Tempus tellus urna mauris molestie purus donec egestas.
						Morbi quisque magna lobortis urna fringilla eget sed
						etiam. Adipiscing etiam cursus nisl integer sociis augue
						eget donec. Lorem ipsum dolor sit amet consectetur. A at
						libero orci luctus sollicitudin posuere lectus libero
						pellentesque. Tempus tellus urna mauris molestie purus
						donec egestas. Morbi quisque magna lobortis urna
						fringilla eget sed etiam. Adipiscing etiam cursus nisl
						integer sociis augue eget donec.
					</p>
				</div>
				<p className='mt-10'>Konsentrasi yang ditawarkan</p>
				<div className='mt-10 grid grid-cols-1 gap-x-7 lg:grid-cols-3'>
					{[1, 2, 3].map((_, index) => (
						<div
							className='h-[328px] w-full rounded-3xl px-8 py-9 shadow-[0px_24px_32px_-3px_rgba(3,_9,_50,_0.04)]'
							key={index}
						>
							<div className='flex aspect-square w-fit justify-center rounded-full bg-primary/20 p-4'>
								<img src={webIcon} alt='' className='w-3/4' />
							</div>
							<div className='mt-7 flex flex-col gap-5'>
								<p className='text-sm font-medium text-secondary'>
									Web Development
								</p>
								<p className='text-[10px] leading-[18px] text-greyCol'>
									Belajar dunia desain web dan bangun karir
									yang menarik sebagai pengembang web.
								</p>
							</div>
							<Button
								title='Lihat Karya'
								className='mt-4'
								link='/karya'
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Tentang;
