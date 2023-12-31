import SEOComponent from '../../components/SEO';
import StrukturList from '../../components/profile/StrukturList';
import { pengurus } from '../../constants';
import useSWR from 'swr';
import { BASE_URL } from '../../utils';
import { fetcher } from '../../utils/fetcher';

const Struktur = () => {
	const { data: struktur } = useSWR(`${BASE_URL}/bpo`, fetcher);

	return (
		<>
			<SEOComponent title={'Struktur Organisasi | Inready Workgroup'} />
			<div className='w-full text-justify'>
				<p className='text-left text-2xl font-medium text-secondary'>
					Struktur Organisasi Inready Workgroup
				</p>
				<div className='mt-9 flex flex-col gap-9 text-xs text-greyCol'>
					<p>Periode 2022-2023</p>
				</div>

				<StrukturList
					title={'Pembina Inready Workgroup'}
					data={pengurus}
				/>
				<StrukturList
					title={'BPO Inready Workgroup'}
					data={struktur?.presidium}
				/>
				{struktur?.bpo.map((bpo, index) => (
					<StrukturList key={index} title={bpo.name} data={bpo.division} divisi={true} />
				))}
			</div >
		</>
	);
};

export default Struktur;
