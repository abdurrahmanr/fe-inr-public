const Konsentrasi = ({ svg, title, description }) => {
	return (
		<div className='flex items-center gap-3'>
			<div
				className={`flex aspect-auto h-16 w-16 items-center justify-center rounded-[10px] bg-primary/30 text-white`}
			>
				<img src={svg} alt='' />
			</div>
			<div className='flex flex-col justify-center gap-[14px]'>
				<p className='text-sm font-medium'>{title}</p>
				<p className='text-xs font-normal text-[#969696]'>
					{description}
				</p>
			</div>
		</div>
	);
};

export default Konsentrasi;
