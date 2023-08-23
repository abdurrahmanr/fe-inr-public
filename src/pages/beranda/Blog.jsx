import { Separator } from '@radix-ui/react-separator';
import * as Tabs from '@radix-ui/react-tabs';
import Button from '../../components/Button';
import { dataBlog } from '../../constants';
import heroBlog from '../../assets/heroBlog.png';
import { underlineTitle } from '../../utils/index';
import { Link } from 'react-router-dom';

const Blog = () => {
	return (
		<div className='mx-5 h-fit items-center justify-center bg-white sm:mx-10 xl:mx-[156px] 2xl:mx-[348px]'>
			<Tabs.Root
				defaultValue={dataBlog[0].title}
				orientation='vertical'
				className='my-24 grid grid-cols-12 gap-x-0 lg:gap-x-12'
			>
				<Tabs.List
					aria-label='tabs example'
					className='order-last col-span-full inline-flex flex-col lg:col-span-5'
				>
					<div className='mt-10 flex items-center justify-between text-sm'>
						<p>Blog Terbaru</p>
						<Link to='/blog' className='text-[#CC8700]'>
							Lihat Semua
						</Link>
					</div>
					<div className='mt-4'>
						{dataBlog.slice(0, 4).map((data) => (
							<Tabs.Trigger
								key={data.title}
								value={data.title}
								className='w-full rounded-lg px-4 py-5 text-left text-[13px] font-semibold data-[state=active]:bg-primary data-[state=active]:bg-opacity-30'
							>
								<div>
									<div className='flex items-center gap-1 text-[10px] capitalize leading-5 text-greyCol'>
										<p>By</p>
										<p className='text-[#CC8700]'>
											{data.author}
										</p>
										<Separator
											orientation='vertical'
											className='h-2 w-[1px] bg-greyCol'
										/>
										<p>{data.date}</p>
									</div>
									<div className='mt-5 text-[13px]'>
										<p>{data.title}</p>
									</div>
								</div>
							</Tabs.Trigger>
						))}
					</div>
				</Tabs.List>
				<div className='col-span-full h-fit lg:col-span-7'>
					<p className={`${underlineTitle} text-xl font-semibold`}>
						Blog
					</p>
					<div className='mt-12 rounded-[20px] p-8 outline outline-1 outline-[#6D6E76]/[.1]'>
						{dataBlog.map((data) => (
							<Tabs.Content key={data.title} value={data.title}>
								<div className='w-full'>
									<img
										src={heroBlog}
										alt=''
										className='w-full'
									/>
								</div>
								<div className='mt-7 flex items-center gap-1 text-[10px] font-medium capitalize leading-5 text-greyCol'>
									<p>By</p>
									<p className='text-[#CC8700]'>
										{data.author}
									</p>
									<Separator
										orientation='vertical'
										className='h-2 w-[1px] bg-greyCol'
									/>
									<p>{data.date}</p>
								</div>
								<div className='mt-5 text-base font-semibold'>
									<p>{data.title}</p>
								</div>
								<p className='mt-5 text-xs leading-7 text-[#6D6E76]'>
									{data.description}
								</p>
								<Button
									title='Selengkapnya'
									className='mt-9'
									link={`blog/${data.id}`}
								/>
							</Tabs.Content>
						))}
					</div>
				</div>
			</Tabs.Root>
		</div>
	);
};

export default Blog;
