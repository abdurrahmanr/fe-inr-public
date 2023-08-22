import karyaImg from '../../assets/img/karya.jpeg'
import * as Tabs from '@radix-ui/react-tabs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import SEOComponent from '../../components/SEO';
import { boldNoRuin } from '../../utils'
import ReactPaginate from 'react-paginate';
// import { useState } from 'react'

const jenisKarya = ['website', 'desain', 'mobile']

const Karya = () => {
    // const [page, setPage] = useState(0);

    return (
        <>
            <SEOComponent
                title={'Karya | Inready Workgroup'}
            />
            <div className='flex flex-col items-center my-24 text-center'>
                <div className='font-semibold uppercase lg:w-[607px] w-11/12'>
                    <p className='leading-[26px] text-greyCol'>karya kami</p>
                    <p className='text-2xl text-secondary leading-[62px]'>karya terbaik 2023</p>
                    <p className='font-normal leading-9 normal-case text-greyCol/50'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour</p>
                </div>
                <div className="grid w-full grid-cols-1 my-24 lg:grid-cols-3 md:grid-cols-2 gap-x-11 gap-y-28">
                    {[1, 2, 3].map((data) => (
                        <div className="relative flex justify-center" key={data}>
                            <div className='w-full h-full overflow-hidden rounded-primary'>
                                <img src={karyaImg} alt="" className='object-cover w-full h-full ' />
                            </div>
                            <div className='text-greyCol capitalize leading-5 absolute flex flex-col gap-1 px-20 py-2 bg-white -bottom-8 rounded-2xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(171,190,209,0.4)]'>
                                <p className='text-sm font-semibold'>Judul karya</p>
                                <p className='text-xs'>oleh: Imank</p>
                                <p className='text-xs font-semibold leading-7 text-yellowSecondary'>website</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='font-semibold uppercase lg:w-[607px] w-11/12'>
                    <p className='text-2xl text-secondary leading-[62px]'>karya keren lainnya</p>
                    <p className='font-normal leading-9 normal-case text-greyCol/50'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour</p>
                </div>
                <Tabs.Root defaultValue={jenisKarya[0]} className='w-full mt-5'>
                    <div className='relative flex flex-col w-full gap-10 lg:gap-0 lg:flex-row'>
                        <Tabs.List className='flex self-center justify-center gap-5'>
                            {jenisKarya.map((data) => (
                                <Tabs.Trigger key={data} value={data} className='px-5 py-2 text-xs data-[state=active]:font-medium leading-5 capitalize rounded bg-[#F2F3F5] text-[#969696] data-[state=active]:bg-primary/20 data-[state=active]:text-yellowSecondary'>{data}</Tabs.Trigger>
                            ))}
                        </Tabs.List>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className='relative px-5 py-3 ml-auto text-xs leading-5 rounded-md mr-7 lg:mr-0 w-fit bg-primary/20'>Urutkan</button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className='relative z-10 shadow flex flex-col mt-4 outline outline-1 outline-[#D1D5DB] bg-white rounded-[7px] data-[state=open]:animate-dropDown animate-dropDownOut'>
                                <DropdownMenu.Item className={`capitalize  hover:bg-primary hover:bg-opacity-20 py-4 px-6 hover:font-semibold ${boldNoRuin}`}>Periode</DropdownMenu.Item>
                                <DropdownMenu.Item className={`capitalize  hover:bg-primary hover:bg-opacity-20 py-4 px-6 hover:font-semibold ${boldNoRuin}`}>Konsentrasi</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                    <div className="z-0 grid w-full grid-cols-1 my-12 lg:my-24 lg:grid-cols-3 md:grid-cols-2 gap-x-11 gap-y-28">
                        {[1, 2, 3, 4, 5, 6].map((data) => (
                            <Tabs.Content className="relative flex justify-center" key={data} value='website'>
                                <div className='w-full h-full overflow-hidden rounded-primary'>
                                    <img src={karyaImg} alt="" className='object-cover w-full h-full ' />
                                </div>
                                <div className='text-greyCol capitalize leading-5 absolute flex flex-col gap-1 px-20 py-2 bg-white -bottom-8 rounded-2xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(171,190,209,0.4)]'>
                                    <p className='text-sm font-semibold'>Judul karya</p>
                                    <p className='text-xs'>oleh: Imank</p>
                                    <p className='text-xs font-semibold leading-7 text-yellowSecondary'>website</p>
                                </div>
                            </Tabs.Content>
                        ))}
                    </div>
                </Tabs.Root>
                <ReactPaginate
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    activeClassName={"active"}
                    // onPageChange={(event) => setPage(event.selected)}
                    pageCount={6}
                    breakLabel="..."
                    previousLabel='<'
                    nextLabel='>'
                    className='flex items-center gap-5'
                />
            </div>
        </>
    );
}

export default Karya;