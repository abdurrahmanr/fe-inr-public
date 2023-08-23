import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataBlog } from '../../constants';
import heroBlog from '../../assets/heroBlog.png';
import SEOComponent from '../../components/SEO';

const BlogDetail = () => {
	const [data, setData] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		const result = dataBlog.filter((data) => {
			return data.id == id;
		});
		setData(result);
	}, [id]);

	return (
		<>
			<SEOComponent
				title='Pengumuman Calon Angkatan Muda yang berhasil lolos ke Tahap Selanjutnya 1 | Inready Workgroup'
				// description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.'}
				// image={heroBlog}
			/>
			<div className='w-full'>
				<div className='mt-14 flex h-full w-full flex-col gap-3 px-6 lg:px-[105px]'>
					<p className='text-sm font-bold capitalize text-yellowSecondary lg:text-base'>
						{data[0]?.author}
					</p>
					<p className='text-xs text-greyCol'>
						Posted on {data[0]?.date}
					</p>
					<h1 className='text-2xl font-bold leading-8 text-black lg:text-3xl lg:leading-[48px]'>
						{data[0]?.title}
					</h1>
					<div>
						<p className='capitalize'>{data[0]?.category}</p>
					</div>
				</div>
				<div className='mt-14 h-full w-full'>
					<img
						src={heroBlog}
						alt=''
						className='h-full w-full object-cover'
					/>
				</div>
				<div className=' mt-14 flex h-full w-full flex-col gap-3 px-6 lg:px-[105px]'>
					<p className='text-2xl font-bold leading-8 text-secondary [text-wrap:balance] lg:text-4xl lg:leading-[48px]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod.
					</p>
					<div className='my-8 flex flex-col gap-6 text-justify leading-7 text-greyCol'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Non blandit massa enim nec.
							Scelerisque viverra mauris in aliquam sem. At risus
							viverra adipiscing at in tellus. Sociis natoque
							penatibus et magnis dis parturient montes. Ridiculus
							mus mauris vitae ultricies leo. Neque egestas congue
							quisque egestas diam. Risus in hendrerit gravida
							rutrum quisque non.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Non blandit massa enim nec.
							Scelerisque viverra mauris in aliquam sem. At risus
							viverra adipiscing at in tellus. Sociis natoque
							penatibus et magnis dis parturient montes. Ridiculus
							mus mauris vitae ultricies leo. Neque egestas congue
							quisque egestas diam. Risus in hendrerit gravida
							rutrum quisque non.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Non blandit massa enim nec.
							Scelerisque viverra mauris in aliquam sem. At risus
							viverra adipiscing at in tellus. Sociis natoque
							penatibus et magnis dis parturient montes. Ridiculus
							mus mauris vitae ultricies leo. Neque egestas congue
							quisque egestas diam. Risus in hendrerit gravida
							rutrum quisque non.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogDetail;
