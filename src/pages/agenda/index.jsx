import heroAgenda from '../../assets/heroAgenda.png';
import Countdown from 'react-countdown';
import Renderer from '../../components/Countdown';
import SEOComponent from '../../components/SEO';
import useSWR from 'swr';
import Card from '../../components/agenda/Card';
import { BASE_URL, convertDate } from '../../utils';
import { fetcher } from '../../utils/fetcher';

const Agenda = () => {

	const { data, error, isLoading } = useSWR(`${BASE_URL}/home/agenda`, fetcher);

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

						{
							!isLoading &&
							<>
								<p className='text-xl font-semibold uppercase'>
									{data?.data[0].title}
								</p>
								<p className='text-xs'>
									{data?.data[0].description}
								</p>
								<p className='text-[13px]'>Kegiatan Dimulai dalam:</p>
								<Countdown
									date={data?.data[0].time}
									renderer={Renderer}
								/>
							</>
						}
					</div>
				</div>
				<div className='mx-0 mt-40 sm:mx-12 lg:mx-24'>
					<p className='text-[15px] text-yellowSecondary'>
						Agenda yang akan datang
					</p>
					<div className='mt-10 grid grid-cols-12 gap-6'>

						<Card data={data} loading={isLoading} error={error} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Agenda;
