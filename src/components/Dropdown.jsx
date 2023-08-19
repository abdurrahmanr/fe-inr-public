import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Dropdown = ({ activeFilter, lists, setFilter }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className='w-fit'>
                <p className=''>Sort by <span className='font-bold capitalize'>{activeFilter}</span></p>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className='shadow w-fit flex flex-col outline outline-1 outline-[#D1D5DB] bg-white rounded-[7px] data-[state=open]:animate-dropDown animate-dropDownOut'
                    sideOffset={10}
                >
                    {lists.map((list) => (
                        <DropdownMenu.Item className="px-6 py-2 transition duration-200 ease-in-out bg-opacity-0 rounded hover:bg-primary hover:bg-opacity-20" key={list} onClick={() => setFilter(list)}>
                            <p>{list}</p>
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

export default Dropdown;