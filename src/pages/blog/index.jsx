import * as Tabs from '@radix-ui/react-tabs';
import eventIcon from '../../assets/icons/event.svg';
import webIcon from '../../assets/icons/web.svg';
import mobileIcon from '../../assets/icons/mobile.svg';
import designIcon from '../../assets/icons/design.svg';
import { dataBlog } from '../../constants';
import heroBlog from '../../assets/heroBlog.png';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import SEOComponent from '../../components/SEO';

const categories = [
	{
		title: 'event',
		icon: eventIcon,
	},
	{
		title: 'mobile',
		icon: mobileIcon,
	},
	{
		title: 'desain',
		icon: designIcon,
	},
	{
		title: 'web',
		icon: webIcon,
	},
];

const Blog = () => {
	const [page, setPage] = useState(0);
	const [filterData, setFilterData] = useState();
	const [selected, setSelected] = useState('event');
	const n = 4;
	const [data, setData] = useState([]);

	useEffect(() => {
		setFilterData(
			data.filter((item, index) => {
				return (index >= page * n) & (index < (page + 1) * n);
			})
		);
	}, [page, data]);

	useEffect(() => {
		setData(dataBlog.filter((data) => data.category == selected));
	}, [selected]);

	return (
		<>
			<SEOComponent title={'Blog | Inready Workgroup'} />

			<Tabs.Root
				orientation='vertical'
				className='my-5 grid grid-cols-12 gap-x-0 lg:gap-x-12'
				defaultValue={categories[0].title}
			>
				{/* tabs selector */}
				<Tabs.List className='col-span-full inline-flex flex-col gap-4 lg:order-last lg:col-span-3'>
					<p className='text-sm font-bold'>Kategori</p>
					{categories.map((category) => (
						<Tabs.Trigger
							value={category.title}
							key={category.title}
							className='group rounded-[10px] border-[0.5px] border-greyCol/50 px-3 py-3 text-left transition-all duration-500 hover:bg-primary/30 data-[state=active]:border-primary/30 data-[state=active]:bg-primary/30'
							onClick={() => {
								setSelected(category.title);
								setPage(0);
							}}
						>
							<div className='flex items-center gap-2 font-medium capitalize'>
								<div className='aspect-square w-10 rounded-small bg-primary/30 p-3 transition-all duration-500 group-hover:bg-white/60 group-data-[state=active]:bg-white/60'>
									<img
										src={category.icon}
										alt=''
										className='h-full w-full'
									/>
								</div>
								<p className='text-xs'>{category.title}</p>
							</div>
						</Tabs.Trigger>
					))}
				</Tabs.List>

				<div className='col-span-full mt-10 h-fit lg:col-span-9'>
					<p className='text-2xl font-medium'>
						Blog Inready Workgroup
					</p>
					<div className='mt-16 grid auto-rows-[100px] grid-cols-12 grid-rows-4 gap-y-5 lg:gap-12'>
						{/* tab selected content */}
						{filterData?.map((data) => (
							<Tabs.Content
								key={data.title}
								className='group col-span-full rounded-small transition-all duration-500 hover:bg-greyCol/10 data-[state=inactive]:hidden'
								value={data.category}
								asChild
							>
								<Link
									to={`${data.id}`}
									className='flex h-full w-full flex-col items-center gap-x-0 lg:flex-row lg:gap-x-10'
								>
									<div className='h-[274px] w-3/4 overflow-hidden rounded-small lg:w-[234px]'>
										<img
											src={heroBlog}
											alt=''
											className='h-full w-full object-cover transition-all duration-1000 group-hover:scale-105'
										/>
									</div>
									<div className='mt-10 flex h-1/2 w-3/4 flex-col gap-1 lg:mt-0'>
										<p className='text-xs font-semibold capitalize tracking-[3px] text-yellowSecondary'>
											{data.category}
										</p>
										<p className='mt-1 text-xs font-bold leading-7 text-secondary'>
											{data.title}
										</p>
										<p className='text-[10px] text-greyCol'>
											{data.description}
										</p>
									</div>
								</Link>
							</Tabs.Content>
						))}
					</div>
				</div>
			</Tabs.Root>
			{/* pagination */}
			<ReactPaginate
				containerClassName={'pagination'}
				pageClassName={'page-item'}
				activeClassName={'active'}
				// onPageChange={(event) => setPage(event.selected)}
				pageCount={Math.ceil(6)}
				breakLabel='...'
				previousLabel='<'
				nextLabel='>'
				className='mx-auto mb-24 mt-12 flex w-fit items-center gap-5'
			/>
		</>
	);
};

export default Blog;
