import { underlineTitle } from '../../utils/index'
import heroAgenda from '../../assets/heroAgenda.png'
import Countdown from 'react-countdown';
import Renderer from '../../components/Countdown';
import { dataAgenda } from '../../constants/index'
import { Link } from 'react-router-dom';
import { Separator } from '@radix-ui/react-separator';
import calendarIcon from '../../assets/icons/calendar.svg'

const Agenda = () => {
    return (
        <div className='bg-white mx-5 sm:mx-10 xl:mx-[156px] 2xl:mx-[348px] h-fit'>
            <div className='grid grid-cols-12 my-24'>
                <div className='flex flex-col col-span-full lg:col-span-6'>
                    <p className={`${underlineTitle} font-semibold text-xl`}>Agenda</p>
                    <div className='flex justify-center my-auto mt-10'>
                        <div className='w-[338px] h-[409px] bg-primary rounded-[20px] shadow-xl overflow-hidden'>
                            <div className='w-full h-[164px]'>
                                <img src={heroAgenda} alt="" className='object-cover w-full h-full' />
                            </div>
                            <div className='w-full my-6 px-[42px] flex flex-col gap-4'>
                                <p className='text-xl font-semibold uppercase'>Presentasi karya</p>
                                <p className='text-xs text-greyCol'>Tahapan akhir dalam perekrutan anggota baru Inready Workgroup.</p>
                                <div className='flex flex-col gap-6 text-center text-white'>
                                    <p className='text-sm'>Kegiatan Dimulai dalam:</p>
                                    <Countdown date={'2024-02-01T01:02:03'} renderer={Renderer} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-10 col-span-full lg:col-span-6">
                    <p className='font-semibold text-yellowSecondary'>Agenda yang akan datang</p>
                    <div className='outline outline-[#6D6E76]/[.1] rounded-t-[20px] outline-2 flex flex-col justify-around h-full w-full mt-9'>
                        {
                            dataAgenda.map((data) => (
                                <div key={data.id} className='flex flex-col text-secondary'>
                                    <div className='px-9 py-7'>
                                        <p className='text-[13px]'>{data.title}</p>
                                        <div className='flex items-center gap-[6px] mt-2'>
                                            <img src={calendarIcon} alt="" />
                                            <p className='text-[10px] font-light mt-px'>{data.date}</p>
                                        </div>
                                    </div>
                                    <Separator className='w-full h-[2px] bg-[#6D6E76]/[.1]' />
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full h-12 bg-primary rounded-b-[20px] -mt-[0.9px] flex justify-center items-center text-xs'>
                        <Link to='agenda'>
                            Tampilkan lebih banyak
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Agenda;