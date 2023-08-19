import pengurus from '../../assets/img/pengurus.png'
import fbLogo from '../../assets/icons/fb.svg'
import twitterLogo from '../../assets/icons/twitter.svg'
import igLogo from '../../assets/icons/ig.svg'

const StrukturCard = () => {
    return (
        <div className='grid grid-cols-12 rounded-primary border border-greyCol/20 overflow-hidden h-full w-full '>
            <div className='flex justify-center overflow-visible col-span-full bg-primary h-full'>
                <img src={pengurus} alt="" className='h-full w-1/2' />
            </div>
            <div className='h-full px-5 py-3 text-xs capitalize bg-white col-span-full overflow-hidden'>
                <div className='flex flex-col gap-[6px] text-left'>
                    <p className='text-right text-[10px]'>Pembina</p>
                    <p className='font-semibold'>Nama</p>
                    <p className=''>Profesi</p>
                    <p className='text-[10px] text-justify text-greyCol/50 tracking-tighter leading-3'>There are many variations of passages of Lorem Ipsum available</p>
                </div>
                <div className='flex gap-1 mt-4'>
                    <div className='bg-[#F2F4F7] py-[4px] px-[8px] rounded-full flex justify-center items-center'>
                        <img src={igLogo} alt="" />
                    </div>
                    <div className='bg-[#F2F4F7] py-[4px] px-[8px] rounded-full flex justify-center items-center'>
                        <img src={twitterLogo} alt="" />
                    </div>
                    <div className='bg-[#F2F4F7] p-[6px] rounded-full flex justify-center items-center'>
                        <img src={fbLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StrukturCard;