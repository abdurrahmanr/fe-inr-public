import * as Tabs from '@radix-ui/react-tabs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import StrukturCard from '../../components/profile/StrukturCard';
import SEOComponent from '../../components/SEO';
import { useState } from 'react';

const angkatan = [
	'angkatan pendiri',
	'angkatan 1',
	'angkatan 2',
	'angkatan 3',
	'angkatan 4',
	'angkatan 5',
	'angkatan 6',
	'angkatan 7',
	'angkatan 8',
	'angkatan 9',
	'angkatan 10',
];

const Anggota = () => {
	// const [active, setActive] = useState(angkatan[0]);

	return (
		<>
			<SEOComponent title='Anggota | Inready Workgroup' />
			<div className='my-24 flex w-full flex-col items-center text-center'>
				<div className='w-11/12 font-semibold lg:w-[607px]'>
					<p className='uppercase leading-[26px] text-greyCol'>
						ANGGOTA KAMI
					</p>
					<p className='text-2xl capitalize leading-[62px] text-secondary'>
						Anggota Inready Workgroup{' '}
					</p>
					<p className='font-normal normal-case leading-9 text-greyCol/50'>
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered in some form,
						by injected humour
					</p>
				</div>

				<Tabs.Root
					defaultValue={angkatan[1]}
					className='relative z-0 mt-11 w-full'
				>
					<div className='relative flex w-full overflow-x-auto'>
						<Tabs.List className='flex flex-shrink-0 justify-center gap-5'>
							{angkatan.map((data) => (
								<Tabs.Trigger
									key={data}
									value={data}
									className='cursor-pointer rounded bg-[#F2F3F5] px-5 py-2 text-xs capitalize leading-5 text-[#969696] data-[state=active]:bg-primary/20 data-[state=active]:font-medium data-[state=active]:text-yellowSecondary'
								>
									{data}
								</Tabs.Trigger>
							))}
						</Tabs.List>
					</div>
					<div className='my-7 grid w-full grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-4'>
						{[1, 2, 3, 4, 5, 6].map((data) => (
							<Tabs.Content
								className='relative flex justify-center'
								key={data}
								value='angkatan 1'
							>
								<StrukturCard />
							</Tabs.Content>
						))}
					</div>
				</Tabs.Root>
			</div>
		</>
	);
};

export default Anggota;
