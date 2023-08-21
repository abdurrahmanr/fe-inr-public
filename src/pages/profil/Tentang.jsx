import Button from '../../components/Button';
import mobileIcon from '../../assets/icons/mobile.svg'
import designIcon from '../../assets/icons/design.svg'
import webIcon from '../../assets/icons/web.svg'
import SEOComponent from '../../components/SEO';

const Tentang = () => {
    return (
        <>
            <SEOComponent
                title={'Tentang | Inready Workgroup'}
            />
            <div className='w-full text-justify'>
                <p className='text-2xl font-medium text-left text-secondary'>Tentang Inready Workgroup</p>
                <div className='flex flex-col text-xs mt-9 text-greyCol gap-9'>
                    <p >Inready Workgroup merupakan salah satu organisasi yang ada di Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun 2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu dalam bidang IT maupun keorganisasian anggotanya.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec. Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec. Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec.</p>
                </div>
                <p className='mt-10'>Konsentrasi yang ditawarkan</p>
                <div className='grid grid-cols-1 mt-10 lg:grid-cols-3 gap-x-7'>
                    {[1, 2, 3].map((_, index) => (
                        <div className='w-full h-[328px] rounded-3xl px-8 py-9 shadow-[0px_24px_32px_-3px_rgba(3,_9,_50,_0.04)]' key={index}>
                            <div className='flex justify-center p-4 rounded-full bg-primary/20 w-fit aspect-square'>
                                <img src={webIcon} alt="" className='w-3/4' />
                            </div>
                            <div className='flex flex-col gap-5 mt-7'>
                                <p className='text-sm font-medium text-secondary'>Web Development</p>
                                <p className='text-greyCol text-[10px] leading-[18px]'>Belajar dunia desain web dan bangun karir yang menarik sebagai pengembang web.</p>
                            </div>
                            <Button title='Lihat Karya' className='mt-4' link='/karya' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Tentang;