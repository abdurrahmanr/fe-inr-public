// import { dataBlog } from '../constants'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import kegiatanImg from '../../assets/img/kegiatan.png';
import SEOComponent from '../../components/SEO';

const categories = ['outdoor', 'perekrutan', 'pembelajaran'];

const filters = ['terbaru', 'terlama', 'relevan'];

const Kegiatan = () => {
	// const [page, setPage] = useState(0);
	// const [filterData, setFilterData] = useState();
	// const [selected, setSelected] = useState('event');
	const [filter, setFilter] = useState(filters[0]);
	// const n = 4
	// const [data, setData] = useState([])

	// useEffect(() => {
	//     setFilterData(
	//         data.filter((item, index) => {
	//             return (index >= page * n) & (index < (page + 1) * n);
	//         })
	//     );
	// }, [page, data]);

	// useEffect(() => {
	//     setData(
	//         dataBlog.filter((data) => data.category == selected)
	//     )
	// }, [selected])
	return (
		<div className='w-full'>
			<SEOComponent title={'Kegiatan | Inready Workgroup'} />
			<div className='my-12 grid grid-cols-8 gap-x-0 lg:gap-x-12'>
				<ul className='order-last col-span-2 hidden flex-col gap-4 lg:inline-flex'>
					<div className='mt-14 flex items-center text-xs text-greyCol'>
						<p className=''>
							Filter <span className='ml-8 mr-2'>|</span>
						</p>
						<Dropdown
							activeFilter={filter}
							lists={filters}
							setFilter={setFilter}
						/>
					</div>
					<div>
						<p className=''>Semua tag</p>
						<div className='mt-8 flex flex-wrap gap-2'>
							{categories.map((category) => (
								<button
									key={category}
									className='rounded-3xl border border-greyCol/50 px-5 py-4 capitalize text-greyCol/50'
								>
									<p className='text-xs'>{category}</p>
								</button>
							))}
						</div>
					</div>
				</ul>
				<div className='col-span-full mt-10 h-fit lg:col-span-6'>
					<p className='text-xs text-greyCol'>Periode 2023 - 2024</p>
					<p className='text-2xl font-medium'>
						Kegiatan Inready Workgroup
					</p>
					<div className='mt-16 grid grid-flow-row grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
						{[1, 2, 3, 4].map((data) => (
							<div
								key={data}
								className='group relative w-full max-w-[244px] overflow-hidden rounded-primary bg-primary'
							>
								<div className='h-72'>
									<img
										src={kegiatanImg}
										alt=''
										className='h-full w-full object-cover transition-all duration-1000 group-hover:scale-125'
									/>
								</div>
								<div className='absolute inset-0 flex h-full w-full items-end justify-center transition-colors duration-500 group-hover:bg-primary/10'>
									<div className='mb-4 text-white'>
										<p className='font-semibold'>
											Sosialsiasi
										</p>
										<p className='mt-1 text-[10px] leading-4'>
											Tahap Perekrutan
										</p>
										<Link
											to={`${1}`}
											className='mt-3 block rounded-small bg-white px-6 py-4 text-sm font-medium leading-none text-yellowSecondary'
										>
											Selengkapnya
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
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
		</div>
	);
};

export default Kegiatan;
