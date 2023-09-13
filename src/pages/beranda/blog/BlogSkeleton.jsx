import Skeleton from '../../../components/skeletons/Skeleton';

const BlogSkeleton = () => {
    return (
        <>
            <Skeleton type='image' />
            <div className='mt-7'>
                <Skeleton type='text' />
            </div>
            <div className='mt-5'>
                <Skeleton type='text' />
            </div>
            <p className='mt-5'>
                <Skeleton type='text' />
            </p>
        </>
    );
}

export default BlogSkeleton;