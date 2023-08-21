import imagePlaceholder from '../../assets/icons/imagePlaceholder.svg'
import SEOComponent from '../../components/SEO';

const KegiatanDetail = () => {
    return (
        <>
            <SEOComponent
                title={'Judul Kegiatan | Inready Workgroup'}
            />
            <div className='w-full'>
                <div className='mt-20'>
                    <p className='text-xs'>Tahap Perekrutan</p>
                    <p className='mt-2 text-2xl font-semibold'>Sosialisasi Inready Workgroup Periode 2023</p>
                    <div className='flex flex-col gap-10 mt-8 text-xs text-greyCol'>
                        <p>Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec. Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec. Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec.</p>
                    </div>
                </div>
                <div className='w-full my-24 text-center'>
                    <p className='mb-12 font-medium col-span-full'>Dokumentasi</p>
                    <div className='grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-16'>
                        {[1, 2, 3, 4, 5].map((data) => (
                            <div className="w-full h-[174px] overflow-hidden border border-black rounded-primary flex justify-center items-center bg-[#FBFAFC]" key={data}>
                                <img src={imagePlaceholder} alt="" className='w-1/3 h-1/3' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default KegiatanDetail;