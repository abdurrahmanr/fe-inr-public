import imagePlaceholder from '../../assets/icons/imagePlaceholder.svg';
import SEOComponent from '../../components/SEO';
import useSWR from 'swr';
import { BASE_URL, fetcher } from '../../utils';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const KegiatanDetail = () => {

	const { id } = useParams()

	const { data, isLoading } = useSWR(`${BASE_URL}/activity/show/${id}`, fetcher);

	console.log(data)

	return (
		<>
			<SEOComponent title={`${'Sosialisasi'} | Inready Workgroup`} />
			<div className='w-full'>
				<div className='mt-20'>
					<p className='text-xs'>Tahap Perekrutan</p>
					{isLoading ? (
						<Skeleton />
					) : (
						<h1 className='mt-2 text-2xl font-semibold'>
							{data.data.title}
						</h1>
					)}
					{isLoading ? (
						<Skeleton />
					) : (
						<h1 className='mt-8 flex flex-col gap-10 text-xs text-greyCol'>
							{data.data.description}
						</h1>
					)}
					{/* <div className='mt-8 flex flex-col gap-10 text-xs text-greyCol'> */}
					{/* <p>
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
						</p> */}
					{/* </div> */}
				</div>
				<div className='my-24 w-full text-center'>
					<p className='col-span-full mb-12 font-medium'>
						Dokumentasi
					</p>
					<div className='grid grid-cols-1 items-center justify-center gap-x-3 gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
						{/* {data?.image.map((data, index) => (
							<div
								className='flex h-[174px] w-full items-center justify-center overflow-hidden rounded-primary border border-black bg-[#FBFAFC]'
								key={index}
							>
								<img
									src={data}
									alt=''
									className='h-1/3 w-1/3'
								/>
							</div>
						))} */}
						<div
							className='flex h-[174px] w-full items-center justify-center overflow-hidden rounded-primary border border-black bg-[#FBFAFC]'
						>
							<img
								src={data?.image}
								alt=''
								className='h-1/3 w-1/3'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default KegiatanDetail;
