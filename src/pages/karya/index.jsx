import karyaImg from '../../assets/img/karya.jpeg';
import * as Tabs from '@radix-ui/react-tabs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import SEOComponent from '../../components/SEO';
import { boldNoRuin } from '../../utils';
import ReactPaginate from 'react-paginate';
import { ChevronDownIcon } from '@radix-ui/react-icons';
// import { useState } from 'react'

const jenisKarya = ['website', 'desain', 'mobile'];

const Karya = () => {
	// const [page, setPage] = useState(0);

	return (
		<>
			<SEOComponent title={'Karya | Inready Workgroup'} />
			<div className='my-24 flex flex-col items-center text-center'>
				<div className='w-11/12 font-semibold uppercase lg:w-[607px]'>
					<p className='leading-[26px] text-greyCol'>karya kami</p>
					<p className='text-2xl leading-[62px] text-secondary'>
						karya terbaik 2023
					</p>
					<p className='font-normal normal-case leading-9 text-greyCol/50'>
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered in some form,
						by injected humour
					</p>
				</div>
				<div className='my-24 grid w-full grid-cols-1 gap-x-11 gap-y-28 md:grid-cols-2 lg:grid-cols-3'>
					{[1, 2, 3].map((data, index) => (
						<div
							className='relative flex justify-center'
							key={index}
						>
							<div className='h-full w-full overflow-hidden rounded-primary'>
								<img
									src={karyaImg}
									alt=''
									className='h-full w-full object-cover '
								/>
							</div>
							<div className='absolute -bottom-8 flex flex-col gap-1 overflow-hidden rounded-2xl bg-white px-20 py-2 capitalize leading-5 text-greyCol shadow-[0_35px_60px_-15px_rgba(171,190,209,0.4)]'>
								<p className='text-sm font-semibold'>
									Judul karya
								</p>
								<p className='text-xs'>oleh: Imank</p>
								<p className='text-xs font-semibold leading-7 text-yellowSecondary'>
									website
								</p>
							</div>
						</div>
					))}
				</div>
				<div className='w-11/12 font-semibold uppercase lg:w-[607px]'>
					<p className='text-2xl leading-[62px] text-secondary'>
						karya keren lainnya
					</p>
					<p className='font-normal normal-case leading-9 text-greyCol/50'>
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered in some form,
						by injected humour
					</p>
				</div>
				<Tabs.Root defaultValue={jenisKarya[0]} className='mt-5 w-full'>
					<div className='relative flex w-full flex-col gap-10 lg:flex-row lg:gap-0'>
						<Tabs.List className='flex justify-center gap-5 self-center'>
							{jenisKarya.map((data) => (
								<Tabs.Trigger
									key={data}
									value={data}
									className='rounded bg-[#F2F3F5] px-5 py-2 text-xs capitalize leading-5 text-[#969696] data-[state=active]:bg-primary/20 data-[state=active]:font-medium data-[state=active]:text-yellowSecondary'
								>
									{data}
								</Tabs.Trigger>
							))}
						</Tabs.List>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger className='group flex mr-0 ml-auto items-center bg-primary/20 rounded-md px-5 gap-1 py-2 text-greyCol font-medium'>
								<button className='relative text-xs leading-5'>
									Urutkan
								</button>
								<ChevronDownIcon className='transition-transform transform text-[#969696] group-data-[state=open]:-rotate-180' />
							</DropdownMenu.Trigger>
							<DropdownMenu.Content className='relative z-10 mt-4 flex animate-dropDownOut flex-col rounded-[7px] bg-white shadow outline outline-1 outline-[#D1D5DB] data-[state=open]:animate-dropDown text-xs overflow-hidden'>
								<DropdownMenu.Item
									className={`px-6  py-4 capitalize hover:bg-primary hover:bg-opacity-20 hover:text-yellowSecondary hover:font-semibold ${boldNoRuin}`}
								>
									Periode
								</DropdownMenu.Item>
								<DropdownMenu.Item
									className={`px-6  py-4 capitalize hover:bg-primary hover:bg-opacity-20 hover:text-yellowSecondary hover:font-semibold ${boldNoRuin}`}
								>
									Konsentrasi
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</div>
					<div className='z-0 my-12 grid w-full grid-cols-1 gap-x-11 gap-y-28 md:grid-cols-2 lg:my-24 lg:grid-cols-3'>
						{[1, 2, 3, 4, 5, 6].map((data) => (
							<Tabs.Content
								className='relative flex justify-center'
								key={data}
								value='website'
							>
								<div className='h-full w-full overflow-hidden rounded-primary'>
									<img
										src={karyaImg}
										alt=''
										className='h-full w-full object-cover '
									/>
								</div>
								<div className='absolute -bottom-8 flex flex-col gap-1 overflow-hidden rounded-2xl bg-white px-20 py-2 capitalize leading-5 text-greyCol shadow-[0_35px_60px_-15px_rgba(171,190,209,0.4)]'>
									<p className='text-sm font-semibold'>
										Judul karya
									</p>
									<p className='text-xs'>oleh: Imank</p>
									<p className='text-xs font-semibold leading-7 text-yellowSecondary'>
										website
									</p>
								</div>
							</Tabs.Content>
						))}
					</div>
				</Tabs.Root>
				<ReactPaginate
					containerClassName={'pagination'}
					pageClassName={'page-item'}
					activeClassName={'active'}
					// onPageChange={(event) => setPage(event.selected)}
					pageCount={6}
					breakLabel='...'
					previousLabel='<'
					nextLabel='>'
					className='flex items-center gap-5'
				/>
			</div>
		</>
	);
};

export default Karya;
