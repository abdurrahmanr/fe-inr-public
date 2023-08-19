import karyaImg from '../../assets/img/karya.jpeg'
import * as Tabs from '@radix-ui/react-tabs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const jenisKarya = ['website', 'desain', 'mobile']

const Karya = () => {
    return (
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
            <Tabs.Root defaultValue={jenisKarya[0]} className='mt-5 w-full'>
                <div className='relative flex w-full'>
                    <Tabs.List className='flex self-center justify-center gap-5'>
                        {jenisKarya.map((data) => (
                            <Tabs.Trigger key={data} value={data} className='px-5 py-2 text-xs data-[state=active]:font-medium leading-5 capitalize rounded bg-[#F2F3F5] text-[#969696] data-[state=active]:bg-primary/20 data-[state=active]:text-yellowSecondary'>{data}</Tabs.Trigger>
                        ))}
                    </Tabs.List>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className='absolute right-0 px-5 py-3 text-xs leading-5 rounded-md bg-primary/20'>Urutkan</button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className='w-full bg-white'>
                            <DropdownMenu.Item>Periode</DropdownMenu.Item>
                            <DropdownMenu.Item>Konsentrasi</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
                <div className="grid w-full grid-cols-1 my-24 lg:grid-cols-3 md:grid-cols-2 gap-x-11 gap-y-28">
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
        </div>
    );
}

export default Karya;