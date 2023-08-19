import heroAbout from '../../assets/img/heroAbout.jpeg'
import Button from '../../components/Button';
import { underlineTitle } from '../../utils/index'

const Tentang = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full my-36'>
            <div className='w-3/4 lg:w-1/2'>
                <div className=' w-full lg:w-full rounded-[20px] overflow-hidden shadow-xl'>
                    <img src={heroAbout} alt="" className='w-full h-full' />
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-[60px] mt-[91px] w-full'>
                    <p className='font-bold text-2xl text-primary leading-[38px]'>Apa itu Inready Workgroup?</p>
                    <div className='flex flex-col'>
                        <p className={`text-xl font-semibold ${underlineTitle}`}>Tentang Inready Workgroup</p>
                        <p className='text-xs leading-5 text-justify mt-7 text-greyCol'>Inready Workgroup merupakan salah satu organisasi yang ada di Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun 2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu dalam bidang IT maupun keorganisasian anggotanya....</p>
                        <Button title='Selengkapnya' link='/profile/tentang' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tentang;