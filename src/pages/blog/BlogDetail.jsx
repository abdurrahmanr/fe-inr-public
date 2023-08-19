import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataBlog } from '../../constants'
import heroBlog from '../../assets/heroBlog.png'

const BlogDetail = () => {

    const [data, setData] = useState([])
    let { id } = useParams();

    useEffect(() => {
        const result = dataBlog.filter((data) => {
            return data.id == id;
        });
        setData(result)
    }, [id]);

    return (
        <div className='w-full'>
            <div className='lg:px-[105px] mt-14 flex flex-col gap-3 w-full h-full'>
                <p className='font-bold capitalize text-yellowSecondary'>{data[0]?.author}</p>
                <p className='text-xs text-greyCol'>Posted on {data[0]?.date}</p>
                <p className='text-3xl text-black leading-[48px] font-bold'>{data[0]?.title}</p>
                <div>
                    <p className='capitalize'>{data[0]?.category}</p>
                </div>
            </div>
            <div className='w-full h-full mt-14'>
                <img src={heroBlog} alt="" className='object-cover w-full h-full' />
            </div>
            <div className='px-[105px] mt-14 flex flex-col gap-3 w-full h-full'></div>
        </div>
    );
}

export default BlogDetail;