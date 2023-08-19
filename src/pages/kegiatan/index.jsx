// import { dataBlog } from '../constants'
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import kegiatanImg from '../../assets/img/kegiatan.png'

const categories = ['outdoor', 'perekrutan', 'pembelajaran']

const filters = ['terbaru', 'terlama', 'relevan']

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

        <div className='grid grid-cols-8 my-5 gap-x-0 lg:gap-x-12'>
            <ul className='inline-flex flex-col order-last col-span-2 gap-4'>
                <div className='flex items-center text-xs mt-14 text-greyCol'>
                    <p className=''>Filter <span className='ml-8 mr-2'>|</span></p>
                    <Dropdown
                        activeFilter={filter}
                        lists={filters}
                        setFilter={setFilter}
                    />
                </div>
                <div>
                    <p className=''>Semua tag</p>
                    <div className='flex flex-wrap gap-2 mt-8'>
                        {categories.map((category) => (
                            <button key={category} className='px-5 py-4 capitalize border rounded-3xl text-greyCol/50 border-greyCol/50'>
                                <p className='text-xs'>{category}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </ul>
            <div className='mt-10 col-span-full lg:col-span-6 h-fit'>
                <p className='text-xs text-greyCol'>Periode 2023 - 2024</p>
                <p className='text-2xl font-medium'>Kegiatan Inready Workgroup</p>
                <div className='grid grid-flow-row grid-cols-1 gap-10 mt-16 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                    {
                        [1, 2, 3, 4].map((data) => (
                            <div key={data} className='w-full max-w-[244px] bg-primary rounded-primary overflow-hidden relative group'>
                                <div className='h-72'>
                                    <img src={kegiatanImg} alt="" className='object-cover w-full h-full transition-all duration-1000 group-hover:scale-125' />
                                </div>
                                <div className='absolute inset-0 flex items-end justify-center w-full h-full transition-colors duration-500 group-hover:bg-primary/10'>
                                    <div className='mb-4 text-white'>
                                        <p className='font-semibold'>Sosialsiasi</p>
                                        <p className='text-[10px] leading-4 mt-1'>Tahap Perekrutan</p>
                                        <Link to={`${1}`} className='block px-6 py-4 mt-3 text-sm font-medium leading-none bg-white text-yellowSecondary rounded-small'>Selengkapnya</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <ReactPaginate
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    activeClassName={"active"}
                    // onPageChange={(event) => setPage(event.selected)}
                    pageCount={Math.ceil(2)}
                    breakLabel="..."
                    previousLabel='<'
                    nextLabel='>'
                    className='flex items-center gap-5 mt-10'
                />
            </div>
        </div>
    );
}

export default Kegiatan;