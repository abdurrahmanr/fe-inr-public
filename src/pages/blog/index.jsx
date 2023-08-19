import * as Tabs from '@radix-ui/react-tabs';
import eventIcon from '../../assets/icons/event.svg'
import webIcon from '../../assets/icons/web.svg'
import mobileIcon from '../../assets/icons/mobile.svg'
import designIcon from '../../assets/icons/design.svg'
import { dataBlog } from '../../constants'
import heroBlog from '../../assets/heroBlog.png'
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

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
]

const Blog = () => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const [selected, setSelected] = useState('event');
    const n = 4
    const [data, setData] = useState([])

    useEffect(() => {
        setFilterData(
            data.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page, data]);

    useEffect(() => {
        setData(
            dataBlog.filter((data) => data.category == selected)
        )
    }, [selected])

    return (
        <Tabs.Root orientation='vertical' className='grid grid-cols-12 my-5 gap-x-0 lg:gap-x-12' defaultValue={categories[0].title}>
            <Tabs.List className='inline-flex flex-col order-last gap-4 col-span-full lg:col-span-3'>
                <p className='text-sm font-bold'>Kategori</p>
                {categories.map((category) => (
                    <Tabs.Trigger value={category.title} key={category.title} className='py-3 text-left data-[state=active]:bg-primary/30 rounded-[10px] px-3 group data-[state=inactive]:border-[0.5px] border-greyCol/50' onClick={() => { setSelected(category.title); setPage(0) }}>
                        <div className='flex items-center gap-2 font-medium capitalize'>
                            <div className='w-10 p-3 group-data-[state=active]:bg-white/60 rounded-small aspect-square bg-primary/30 transition-all duration-500'>
                                <img src={category.icon} alt="" className='w-full h-full' />
                            </div>
                            <p className='text-xs'>{category.title}</p>
                        </div>
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
            <div className='mt-10 col-span-full lg:col-span-9 h-fit'>
                <p className='text-2xl font-medium'>Blog Inready Workgroup</p>
                <div className='grid grid-cols-12 grid-rows-4 gap-12 mt-16'>
                    {
                        filterData?.map((data) => (
                            <Tabs.Content key={data.title} className='w-full col-span-full h-[274px] data-[state=inactive]:hidden hover:bg-greyCol/10 transition-all duration-500 rounded-small group' value={data.category}>
                                <Link to={`${data.id}`} className='flex items-center w-full h-full gap-x-10'>
                                    <div className='w-[234px] h-full overflow-hidden rounded-small'>
                                        <img src={heroBlog} alt="" className='object-cover w-full h-full transition-all duration-1000 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col w-4/6 gap-4'>
                                        <p className='text-xs font-semibold capitalize tracking-[3px] text-yellowSecondary'>{data.category}</p>
                                        <p className='mt-1 text-xs font-bold leading-7 text-secondary'>{data.title}</p>
                                        <p className='text-[10px] text-greyCol'>{data.description}</p>
                                    </div>
                                </Link>
                            </Tabs.Content>
                        ))
                    }
                </div>
                <ReactPaginate
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    activeClassName={"active"}
                    onPageChange={(event) => setPage(event.selected)}
                    pageCount={Math.ceil(data?.length / n)}
                    breakLabel="..."
                    previousLabel='<'
                    nextLabel='>'
                    className='flex items-center gap-5 mt-10'
                />
            </div>
        </Tabs.Root>
    );
}

export default Blog;