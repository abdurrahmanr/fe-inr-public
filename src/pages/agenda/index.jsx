import { dataAgenda } from '../../constants';
import calendarIcon from '../../assets/icons/calendar.svg';
import heroAgenda from '../../assets/heroAgenda.png';
import Countdown from 'react-countdown';
import Renderer from '../../components/Countdown';
import SEOComponent from '../../components/SEO';

const Agenda = () => {
	return (
		<>
			<SEOComponent title={'Agenda | Inready Workgroup'} />
			<div className='my-24 h-fit'>
				<p className='text-2xl font-semibold text-secondary'>
					Agenda Inready Workgroup Periode 2023
				</p>
				<div className='mt-[71px] grid grid-cols-12 items-center overflow-hidden rounded-[32px] bg-primary px-0 lg:gap-x-12 lg:px-12 lg:py-12'>
					<div className='col-span-full flex h-56 w-full items-center overflow-hidden lg:col-span-5 lg:h-60 lg:rounded-2xl'>
						<img
							src={heroAgenda}
							alt=''
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='col-span-full flex w-full flex-col gap-6 p-8 text-justify text-secondary lg:col-span-7 lg:mt-0 lg:p-0'>
						<p className='text-xl font-semibold uppercase'>
							Presentasi karya
						</p>
						<p className='text-xs'>
							Lorem ipsum dolor sit amet consectetur. A at libero
							orci luctus sollicitudin posuere lectus libero
							pellentesque. Tempus tellus urna mauris molestie
							purus donec egestas. Morbi quisque magna lobortis
							urna fringilla eget sed etiam.
						</p>
						<p className='text-[13px]'>Kegiatan Dimulai dalam:</p>
						<Countdown
							date={'2024-02-01T01:02:03'}
							renderer={Renderer}
						/>
					</div>
				</div>
				<div className='mx-0 mt-40 sm:mx-12 lg:mx-24'>
					<p className='text-[15px] text-yellowSecondary'>
						Agenda yang akan datang
					</p>
					<div className='mt-10 grid grid-cols-12 gap-6'>
						{dataAgenda.map((data) => (
							<div
								key={data.id}
								className='col-span-full rounded-[20px] bg-[#FBF6EA] px-6 py-[30px] sm:col-span-6 lg:col-span-4'
							>
								<p className='text-[13px] font-semibold leading-6'>
									{data.title}
								</p>
								<div className='mt-2 flex flex-col gap-2 text-[10px]'>
									<div className='flex items-center gap-[6px]'>
										<img src={calendarIcon} alt='' />
										<p className='mt-px font-light'>
											{data.date}
										</p>
									</div>
									<p className='text-greyCol/50'>
										{data.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Agenda;
