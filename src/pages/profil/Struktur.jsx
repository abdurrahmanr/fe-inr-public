import SEOComponent from '../../components/SEO';
import StrukturList from '../../components/profile/StrukturList';
import { pengurus } from '../../constants';

const Struktur = () => {
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
					datas={pengurus}
				/>
				<StrukturList
					title={'BPO Inready Workgroup'}
					datas={pengurus}
				/>
				<StrukturList title={'Divisi'} datas={pengurus} divisi={true} />
				<StrukturList title={'Divisi'} datas={pengurus} divisi={true} />
			</div>
		</>
	);
};

export default Struktur;
