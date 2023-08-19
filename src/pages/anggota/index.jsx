const Anggota = () => {
    return (
        <>
            {[1, 2].map((data) => (
                // <div key={data} className='grid grid-cols-9 group first:bg-black'>
                //     <div className='flex flex-col w-full h-full col-span-4 gap-3 px-6 text-white bg-black group-even:bg-primary capitalize rounded-[10px] py-11 group-odd:order-first group-even:order-last group-first:bg-red-500'>
                //         <p className='text-xs font-semibold'>Inready Workgroup didirikan</p>
                //         <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur. Odio quisque  arcu.</p>
                //     </div>
                //     <div className='relative flex items-end justify-center col-span-1'>
                //         <div className='w-1 h-1/2 bg-primary'></div>
                //         <div className='absolute self-center w-6 h-6 text-center bg-white rounded-full outline-1 outline outline-primary'></div>
                //     </div>
                //     <div className='flex items-center col-span-4 group-odd:order-last group-even:order-first group-even:justify-end group-odd:justify-start'>
                //         <p>2007</p>
                //     </div>
                // </div>
                <div key={data} className='w-10 h-10 first:bg-primary last:bg-red-500'></div>
            ))}
        </>
    );
}

export default Anggota;