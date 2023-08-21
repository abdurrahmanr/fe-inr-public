import SEOComponent from '../../components/SEO';
import Timeline from '../../components/Timeline';

const Sejarah = () => {
    return (
        <>
            <SEOComponent
                title={'Sejarah | Inready Workgroup'}
            />
            <div className='w-full text-justify'>
                <p className='text-2xl font-medium text-left text-secondary'>Sejarah Inready Workgroup</p>
                <div className='flex flex-col text-xs mt-9 text-greyCol gap-9'>
                    <p>Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec. Lorem ipsum dolor sit amet consectetur. A at libero orci luctus sollicitudin posuere lectus libero pellentesque. Tempus tellus urna mauris molestie purus donec egestas. Morbi quisque magna lobortis urna fringilla eget sed etiam. Adipiscing etiam cursus nisl integer sociis augue eget donec.</p>
                </div>
                <div className='my-24'>
                    <Timeline />
                </div>
            </div>
        </>
    );
}

export default Sejarah;