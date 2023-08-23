import imagePlaceholder from '../../assets/icons/imagePlaceholder.svg';
import SEOComponent from '../../components/SEO';

const KegiatanDetail = () => {
	return (
		<>
			<SEOComponent title={`${'Sosialisasi'} | Inready Workgroup`} />
			<div className='w-full'>
				<div className='mt-20'>
					<p className='text-xs'>Tahap Perekrutan</p>
					<h1 className='mt-2 text-2xl font-semibold'>
						Sosialisasi Inready Workgroup Periode 2023
					</h1>
					<div className='mt-8 flex flex-col gap-10 text-xs text-greyCol'>
						<p>
							Lorem ipsum dolor sit amet consectetur. A at libero
							orci luctus sollicitudin posuere lectus libero
							pellentesque. Tempus tellus urna mauris molestie
							purus donec egestas. Morbi quisque magna lobortis
							urna fringilla eget sed etiam. Adipiscing etiam
							cursus nisl integer sociis augue eget donec. Lorem
							ipsum dolor sit amet consectetur. A at libero orci
							luctus sollicitudin posuere lectus libero
							pellentesque. Tempus tellus urna mauris molestie
							purus donec egestas. Morbi quisque magna lobortis
							urna fringilla eget sed etiam. Adipiscing etiam
							cursus nisl integer sociis augue eget donec.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur. A at libero
							orci luctus sollicitudin posuere lectus libero
							pellentesque. Tempus tellus urna mauris molestie
							purus donec egestas. Morbi quisque magna lobortis
							urna fringilla eget sed etiam. Adipiscing etiam
							cursus nisl integer sociis augue eget donec. Lorem
							ipsum dolor sit amet consectetur. A at libero orci
							luctus sollicitudin posuere lectus libero
							pellentesque. Tempus tellus urna mauris molestie
							purus donec egestas. Morbi quisque magna lobortis
							urna fringilla eget sed etiam. Adipiscing etiam
							cursus nisl integer sociis augue eget donec.
						</p>
					</div>
				</div>
				<div className='my-24 w-full text-center'>
					<p className='col-span-full mb-12 font-medium'>
						Dokumentasi
					</p>
					<div className='grid grid-cols-1 items-center justify-center gap-x-3 gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
						{[1, 2, 3, 4, 5].map((data) => (
							<div
								className='flex h-[174px] w-full items-center justify-center overflow-hidden rounded-primary border border-black bg-[#FBFAFC]'
								key={data}
							>
								<img
									src={imagePlaceholder}
									alt=''
									className='h-1/3 w-1/3'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default KegiatanDetail;
