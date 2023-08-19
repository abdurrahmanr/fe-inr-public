const Konsentrasi = ({ svg, title, description }) => {
    return (
        <div className='flex items-center gap-3'>
            <div className={`flex items-center bg-primary bg-opacity-30 rounded-[10px] h-16 aspect-auto w-16 justify-center`}>
                <img src={svg} alt="" />
            </div>
            <div className='flex flex-col gap-[14px] justify-center'>
                <p className='text-sm font-medium'>{title}</p>
                <p className='font-normal text-[#969696] text-xs'>{description}</p>
            </div>

        </div>
    );
}

export default Konsentrasi;