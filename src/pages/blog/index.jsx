import * as Tabs from '@radix-ui/react-tabs';
import eventIcon from '../../assets/icons/event.svg';
import webIcon from '../../assets/icons/web.svg';
import mobileIcon from '../../assets/icons/mobile.svg';
import designIcon from '../../assets/icons/design.svg';
import { } from '../../constants';
import heroBlog from '../../assets/heroBlog.png';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import SEOComponent from '../../components/SEO';
import { BASE_URL, boldNoRuin } from '../../utils';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import useSWR from 'swr';
import { fetchWithParams } from '../../utils/fetcher';

const categories = [
	{
		id: 1,
		title: 'event',
		icon: eventIcon,
	},
	{
		id: 2,
		title: 'mobile',
		icon: mobileIcon,
	},
	{
		id: 3,
		title: 'desain',
		icon: designIcon,
	},
	{
		id: 4,
		title: 'web',
		icon: webIcon,
	},
];

const Blog = () => {
	const [selected, setSelected] = useState('event');
	const [queryParams, setQueryParams] = useState('')
	const { data: dataBlog, isLoading } = useSWR({ url: `${BASE_URL}/blog`, params: queryParams }, fetchWithParams);

	return (
		<>
			<SEOComponent title={'Blog | Inready Workgroup'} />

			<Tabs.Root
				orientation='vertical'
				className='my-5 grid grid-cols-12 gap-x-0 lg:gap-x-12'
				defaultValue={categories[0].title}
			>
				{/* tabs selector */}
				<Tabs.List className='col-span-full inline-flex flex-row items-center gap-4 lg:order-last lg:col-span-3 lg:flex-col lg:items-stretch'>
					<p className='text-sm font-bold'>Kategori</p>

					{/* desktop filter */}
					{categories.map((category) => (
						<Tabs.Trigger
							value={category.title}
							key={category.id}
							className='group hidden rounded-[10px] border-[0.5px] border-greyCol/50 px-3 py-3 text-left transition-all duration-500 hover:bg-primary/30 data-[state=active]:border-primary/30 data-[state=active]:bg-primary/30 lg:block'
							onClick={() => {
								setSelected(category.title);
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

					{/* mobile filter */}
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className='relative ml-auto mr-7 block w-20 rounded-md bg-primary/20 px-5 py-3 text-xs capitalize leading-5 lg:mr-0 lg:hidden'>
								{selected}
							</button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content className='relative z-10 mt-4 flex animate-dropDownOut flex-col rounded-[7px] bg-white shadow outline outline-1 outline-[#D1D5DB] data-[state=open]:animate-dropDown'>
							{categories.map((category) => (
								<DropdownMenu.Item
									key={category.title}
									className={`px-6  py-4 capitalize hover:bg-primary hover:bg-opacity-20 hover:font-semibold ${boldNoRuin}`}
									onClick={() => setSelected(category.title)}
								>
									{category.title}
								</DropdownMenu.Item>
							))}
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</Tabs.List>

				<div className='col-span-full mt-10 h-fit lg:col-span-9'>
					<p className='text-2xl font-medium'>
						Blog Inready Workgroup
					</p>
					<div className={`mt-16 grid grid-cols-12 grid-rows-${dataBlog?.data.length} gap-y-5 lg:gap-12`}>
						{/* tab selected content */}
						{
							!isLoading &&
							dataBlog?.data.map((data) => (
								<Tabs.Content
									key={data.title}
									className='group row-span-1 relative z-0 col-span-full rounded-small transition-all duration-500 hover:bg-greyCol/10 data-[state=inactive]:hidden'
									value={'event'}
									asChild
								>
									<Link
										to={`${data.slug}`}
										className='flex h-full w-full flex-col items-center gap-x-0 lg:flex-row lg:gap-x-10'
									>
										<div className='h-[274px] w-3/4 overflow-hidden rounded-small lg:w-[234px]'>
											<img
												src={heroBlog}
												alt=''
												loading='lazy'
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
												{data.content}
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
				pageCount={dataBlog?.meta.total_page}
				breakLabel='...'
				previousLabel='<'
				nextLabel='>'
				onPageChange={(e) => setQueryParams(`?page=${e.selected + 1}`)}
				// onPageActive={(event) => console.log(event)}
				// onClick={(event) => { console.log(event) }}
				className='mx-auto mb-24 mt-12 flex w-fit items-center gap-5'
			/>
		</>
	);
};

export default Blog;
