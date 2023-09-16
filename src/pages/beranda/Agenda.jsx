import { BASE_URL, convertDate, fetcher, underlineTitle } from '../../utils/index';
import heroAgenda from '../../assets/heroAgenda.png';
import Countdown from 'react-countdown';
import Renderer from '../../components/Countdown';
import { Link } from 'react-router-dom';
import { Separator } from '@radix-ui/react-separator';
import calendarIcon from '../../assets/icons/calendar.svg';
import useSWR from 'swr';

const Agenda = () => {
	const { data, isLoading } = useSWR(`${BASE_URL}/home/agenda`, fetcher);

	return (
		<div className='mx-5 h-fit bg-white sm:mx-10 xl:mx-[156px] 2xl:mx-[348px]'>
			<div className='my-24 grid grid-cols-12'>
				<div className='col-span-full flex flex-col lg:col-span-6'>
					<p className={`${underlineTitle} text-xl font-semibold`}>
						Agenda
					</p>
					<div className='mt-10 lg:mt-auto lg:my-auto flex justify-center'>
						{!isLoading && (
							<div className='h-[409px] w-[338px] overflow-hidden rounded-[20px] bg-primary shadow-xl'>
								<div className='h-[164px] w-full'>
									<img
										src={heroAgenda}
										alt=''
										className='h-full w-full object-cover'
									/>
								</div>
								<div className='my-6 flex w-full flex-col gap-4 px-[42px]'>
									<p className='text-xl font-semibold uppercase'>
										{data?.data[0].title}
									</p>
									<p className='text-xs text-greyCol'>
										{data?.data[0].description}
									</p>
									<div className='flex flex-col gap-6 text-center text-white'>
										<p className='text-sm'>
											Kegiatan Dimulai dalam:
										</p>
										<Countdown
											date={data?.data[0].time}
											renderer={Renderer}
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className='col-span-full mt-10 flex flex-col items-center justify-center lg:col-span-6'>
					<p className='font-semibold text-yellowSecondary'>
						Agenda yang akan datang
					</p>
					<div className='mt-9 flex h-full w-full flex-col justify-around rounded-t-[20px] outline outline-2 outline-[#6D6E76]/[.1]'>
						{data?.data.map((data) => (
							<div key={data.id} className='flex flex-col text-secondary'>
								<div className='px-9 py-7'>
									<p className='text-[13px]'>{data.title}</p>
									<div className='mt-2 flex items-center gap-[6px]'>
										<img src={calendarIcon} alt='' />
										<p className='mt-px text-[10px] font-light'>
											{convertDate(data.time)}
										</p>
									</div>
								</div>
								<Separator className='h-[2px] w-full bg-[#6D6E76]/[.1]' />
							</div>
						))}
					</div>
					<div className='-mt-[0.9px] flex h-12 w-full items-center justify-center rounded-b-[20px] bg-primary text-xs'>
						<Link to='agenda'>Tampilkan lebih banyak</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Agenda;
