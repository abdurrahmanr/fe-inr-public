import * as Accordion from '@radix-ui/react-accordion';

const AccordionComponent = ({ title, children }) => {
	return (
		<Accordion.Root type='single' collapsible>
			<Accordion.Item value='item-1'>
				<Accordion.Trigger className='capitalize'>
					{title}
				</Accordion.Trigger>
				<Accordion.Content>{children}</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	);
};

export default AccordionComponent;
