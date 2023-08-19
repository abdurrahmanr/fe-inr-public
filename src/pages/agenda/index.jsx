import { dataAgenda } from '../../constants'
import calendarIcon from '../../assets/icons/calendar.svg'
import heroAgenda from '../../assets/heroAgenda.png'
import Countdown from 'react-countdown';
import Renderer from '../../components/Countdown';

const Agenda = () => {
    return (
        <div className='my-24 h-fit'>
            <p className='text-2xl font-semibold text-secondary'>Agenda Inready Workgroup Periode 2023</p>
            <div className='mt-[71px] h-fit lg:h-[344px] w-full bg-primary rounded-[32px] overflow-hidden grid grid-cols-12 items-center px-6 lg:px-12'>
                <div className='flex items-center w-full overflow-hidden lg:w-1/2 col-span-full lg:col-span-5 rounded-2xl h-1/2'>
                    <img src={heroAgenda} alt="" className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-col gap-8 text-justify col-span-full lg:col-span-7 text-secondary'>
                    <p className='text-xl font-semibold uppercase'>Presentasi karya</p>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam.</p>
                    <p className='text-[13px]'>Kegiatan Dimulai dalam:</p>
                    <Countdown date={'2024-02-01T01:02:03'} renderer={Renderer} />
                </div>
            </div>
            <div className='mx-0 mt-40 sm:mx-12 lg:mx-24'>
                <p className='text-yellowSecondary text-[15px]'>Agenda yang akan datang</p>
                <div className='grid grid-cols-12 gap-6 mt-10'>
                    {
                        dataAgenda.map((data) => (
                            <div key={data.id} className='col-span-full sm:col-span-6 lg:col-span-4 bg-[#FBF6EA] px-6 py-[30px] rounded-[20px]'>
                                <p className='text-[13px] leading-6 font-semibold'>{data.title}</p>
                                <div className='text-[10px] mt-2 flex flex-col gap-2'>
                                    <div className='flex items-center gap-[6px]'>
                                        <img src={calendarIcon} alt="" />
                                        <p className='mt-px font-light'>{data.date}</p>
                                    </div>
                                    <p className='text-greyCol/50'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Agenda;