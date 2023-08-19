import karyaImg from '../../assets/img/karya.jpeg'
import * as Tabs from '@radix-ui/react-tabs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import StrukturCard from '../../components/profile/StrukturCard';

const jenisKarya = ['angkatan pendiri', 'angkatan 1', 'angkatan 2', 'angkatan 3', 'angkatan 4', 'angkatan 5', 'angkatan 6', 'angkatan 7', 'angkatan 8', 'angkatan 9',]

const Anggota = () => {
    return (
        <div className='text-center w-full flex flex-col items-center my-24'>
            <div className='font-semibold lg:w-[607px] w-11/12'>
                <p className='leading-[26px] text-greyCol uppercase'>ANGGOTA KAMI</p>
                <p className='text-2xl text-secondary leading-[62px] capitalize'>Anggota Inready Workgroup </p>
                <p className='font-normal leading-9 normal-case text-greyCol/50'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour</p>
            </div>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className='px-5 py-3 text-xs leading-5 rounded-md bg-primary/20 mt-14'>Urutkan</button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className='w-full bg-white'>
                    <DropdownMenu.Item>Periode</DropdownMenu.Item>
                    <DropdownMenu.Item>Konsentrasi</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>

            <Tabs.Root defaultValue={jenisKarya[1]} className='mt-11 w-full'>
                <div className='relative flex w-full overflow-x-scroll'>
                    <Tabs.List className='flex justify-center gap-5 flex-shrink-0'>
                        {jenisKarya.map((data) => (
                            <Tabs.Trigger key={data} value={data} className='px-5 py-2 text-xs data-[state=active]:font-medium leading-5 capitalize rounded bg-[#F2F3F5] text-[#969696] data-[state=active]:bg-primary/20 data-[state=active]:text-yellowSecondary'>{data}</Tabs.Trigger>
                        ))}
                    </Tabs.List>
                </div>
                <div className="grid w-full grid-cols-1 my-7 lg:grid-cols-4 md:grid-cols-3 gap-x-6 gap-y-14">
                    {[1, 2, 3, 4, 5, 6].map((data) => (
                        <Tabs.Content className="relative flex justify-center" key={data} value='angkatan 1'>
                            <StrukturCard />
                        </Tabs.Content>
                    ))}
                </div>
            </Tabs.Root>
        </div>
    );
}

export default Anggota;