import SEOComponent from '../../components/SEO';
import Timeline from '../../components/Timeline';

const Sejarah = () => {
	return (
		<>
			<SEOComponent title={'Sejarah | Inready Workgroup'} />
			<div className='w-full text-justify'>
				<p className='text-left text-2xl font-medium text-secondary'>
					Sejarah Inready Workgroup
				</p>
				<div className='mt-9 flex flex-col gap-9 text-xs text-greyCol indent-[35px]'>
					<p>
						Lorem ipsum dolor sit amet consectetur. A at libero orci
						luctus sollicitudin posuere lectus libero pellentesque.
						Tempus tellus urna mauris molestie purus donec egestas.
						Morbi quisque magna lobortis urna fringilla eget sed
						etiam. Adipiscing etiam cursus nisl integer sociis augue
						eget donec. Lorem ipsum dolor sit amet consectetur. A at
						libero orci luctus sollicitudin posuere lectus libero
						pellentesque. Tempus tellus urna mauris molestie purus
						donec egestas. Morbi quisque magna lobortis urna
						fringilla eget sed etiam. Adipiscing etiam cursus nisl
						integer sociis augue eget donec.
					</p>
				</div>
				<div className='my-24'>
					<Timeline />
				</div>
			</div>
		</>
	);
};

export default Sejarah;
