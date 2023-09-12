import picture1 from '../../assets/img/karya@beranda/1.jpeg';
import picture2 from '../../assets/img/karya@beranda/2.jpeg';
import picture3 from '../../assets/img/karya@beranda/3.jpeg';
import picture4 from '../../assets/img/karya@beranda/4.jpeg';
import picture5 from '../../assets/img/karya@beranda/5.jpeg';
import picture6 from '../../assets/img/karya@beranda/6.jpeg';
import picture7 from '../../assets/img/karya@beranda/7.jpeg';
import picture8 from '../../assets/img/karya@beranda/8.jpeg';
import picture9 from '../../assets/img/karya@beranda/9.jpeg';

const Kegiatan = () => {
	return (
		<div className='h-fit text-center flex flex-col gap-3' >
			<p className='text-greyCol/50 font-semibold text-[13px] leading-[19px]'>#INREADYWORKGROUP</p>
			<p className='text-xl leading-6 font-bold text-yellowSecondary'>KEGIATAN INREADY WORKGROUP</p>
			<div className="grid grid-cols-5 gap-3">
				<div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 lg:-ml-14 justify-self-end">
					<div className="grid gap-3 grid-flow-col w-fit justify-self-end">
						<div className='self-end w-full h-full lg:w-[247.956px] lg:h-[345.69px] overflow-hidden rounded-primary'>
							<img src={picture1} className='w-full h-full object-cover' alt="" />
						</div>
						<div className='self-end w-full h-full lg:h-[282.344px] overflow-hidden rounded-primary'>
							<img src={picture2} className='w-full h-full object-cover' alt="" />
						</div>
					</div>
					<div className="grid gap-3 grid-flow-col w-fit">
						<div className='w-full h-full lg:w-[344.785px] lg:h-[292.298px] overflow-hidden rounded-primary'>
							<img src={picture6} className='w-full h-full object-cover' alt="" />
						</div>
						<div className='w-full h-full lg:h-[218.997px] overflow-hidden rounded-primary'>
							<img src={picture7} className='w-full h-full object-cover' alt="" />
						</div>
					</div>
				</div>
				<div className="lg:col-span-1 col-span-full w-full flex justify-center">
					<div className='w-2/3 lg:h-[354.739px] self-center overflow-hidden rounded-primary'>
						<img src={picture3} className='h-full w-full object-cover' alt="" />
					</div>
				</div>
				<div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 lg:-mr-16 translate-y-0">
					<div className="grid gap-3 grid-flow-col w-fit">
						<div className='self-end w-full h-full lg:w-[262.435px] lg:h-[314.922px] overflow-hidden rounded-primary'>
							<img src={picture4} className='w-full h-full object-cover' alt="" />
						</div>
						<div className='self-end w-full h-full lg:w-[384.603px] lg:h-[391.842px] overflow-hidden rounded-primary'>
							<img src={picture5} className='w-full h-full object-cover' alt="" />
						</div>
					</div>
					<div className="grid gap-3 grid-flow-col w-fit">
						<div className='w-full h-full lg:w-[161.081px] lg:h-[218.997px] overflow-hidden rounded-primary'>
							<img src={picture8} className='w-full h-full object-cover' alt="" />
						</div>
						<div className='w-full h-full lg:w-[233.476px] lg:h-[177.37px] overflow-hidden rounded-primary'>
							<img src={picture9} className='w-full h-full object-cover' alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Kegiatan;
