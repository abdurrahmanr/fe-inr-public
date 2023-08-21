import Hero from './Hero';
import Konsentrasi from './Konsentrasi';
import mobileIcon from '../../assets/icons/mobile.svg'
import designIcon from '../../assets/icons/design.svg'
import webIcon from '../../assets/icons/web.svg'
import Tentang from './Tentang';
import SeparatorComponent from '../../components/Separator';
import Karya from './karya/Karya';
import Blog from './Blog';
import Kegiatan from './Kegiatan';
import Agenda from './Agenda';
import SEOComponent from '../../components/SEO';

const Beranda = () => {
    return (
        <>
            <SEOComponent
                title='Inready Workgroup'
            />
            <div className='h-fit'>
                <Hero />
                <div className='flex gap-[76px] py-[74px] justify-center flex-col lg:flex-row items-center'>
                    <Konsentrasi svg={webIcon} title='Web Development' description='Lorem Ipsum is simply' />
                    <Konsentrasi svg={designIcon} title='Design' description='Lorem Ipsum is simply' />
                    <Konsentrasi svg={mobileIcon} title='Mobile Applications' description='Lorem Ipsum is simply' />
                </div>
                <SeparatorComponent />
                <Tentang />
                <Karya />
                <Blog />
                <Kegiatan />
                <Agenda />
            </div>
        </>
    );
}

export default Beranda;