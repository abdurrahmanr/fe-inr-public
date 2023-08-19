import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";

const Nav = () => {

    const [open, setOpen] = useState(false);

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Hover me
            </Popover.Trigger>
            <Popover.Content
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='mt-10'
            >
                Popover content
            </Popover.Content>
        </Popover.Root>
    );
}

export default Nav;