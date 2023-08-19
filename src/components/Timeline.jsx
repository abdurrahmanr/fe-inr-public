const sejarah = [
    {
        "judul": "Pengantar Ilmu Komputer",
        "deskripsi": "Buku ini mengajarkan dasar-dasar ilmu komputer kepada pembaca dengan bahasa yang sederhana dan mudah dipahami.",
        "tahun": 2020
    },
    {
        "judul": "Explorasi Luar Angkasa",
        "deskripsi": "Sebuah dokumenter mengenai perjalanan manusia dalam mengeksplorasi luar angkasa dan penemuan-penemuan menakjubkan.",
        "tahun": 2018
    },
    {
        "judul": "Resep Makanan Internasional",
        "deskripsi": "Buku masak yang berisi beragam resep makanan dari berbagai belahan dunia, cocok untuk para pecinta kuliner.",
        "tahun": 2022
    },

]

const Timeline = () => {
    return (
        <div>
            {sejarah.map((data, index) => (
                <div key={index} className='grid grid-cols-9 group'>
                    <div className='flex flex-col w-full h-full col-span-4 gap-3 px-6 text-white bg-black group-even:bg-primary capitalize rounded-[10px] py-11 group-odd:order-first group-even:order-last relative justify-center'>
                        <p className='text-xs font-semibold'>{data.judul}</p>
                        <p className='text-[10px]'>{data.deskripsi}</p>
                        <div className='w-0 h-0 border-t-[14px] border-t-transparent border-l-[25px] group-odd:border-l-black border-b-[14px] border-b-transparent absolute group-odd:-right-3 group-even:-left-3 group-even:rotate-180 m-auto group-even:border-l-primary'></div>
                    </div>
                    <div className='relative flex items-end justify-center col-span-1'>
                        <div className='w-1 h-full bg-black group-first:h-1/2 group-first:bg-primary'></div>
                        <div className='absolute self-center w-6 h-6 text-center bg-white rounded-full outline-1 outline group-first:outline-primary outline-black'></div>
                    </div>
                    <div className='flex items-center col-span-4 group-odd:order-last group-even:order-first group-even:justify-end group-odd:justify-start'>
                        <p>{data.tahun}</p>
                    </div>
                </div>
            ))}
            <div className='h-20'>
                <div className='relative flex items-end justify-center h-full'>
                    <div className='w-1 h-full bg-black group-first:bg-primary'></div>
                    <div className='absolute self-end w-6 h-6 text-center rounded-full bg-primary outline-1 outline group-first:outline-primary outline-primary'></div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;