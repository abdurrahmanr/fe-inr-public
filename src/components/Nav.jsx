import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { TriangleDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { links } from '../constants';
import logo from '../assets/inr.png'
import { boldNoRuin, toCapitalize } from '../utils'
import AccordionComponent from './Accordion';
import { useState } from 'react';

const Nav = () => {
    const location = useLocation()

    const [show, setShow] = useState(false)
    return (
        <NavigationMenu.Root className='flex justify-between h-[80px] items-center shadow px-5 sm:px-10 xl:px-[156px] 2xl:px-[348px] fixed w-full bg-white z-20' orientation='vertical'>
            <div className='w-full'>
                <NavigationMenu.List className='relative z-10 flex items-center min-w-max lg:justify-between'>

                    <NavigationMenu.Item className=''>
                        <NavLink to='/'>
                            <img src={logo} alt="Logo Inready Workgroup" className='h-[80px] hover:text-black mx-auto lg:mx-0' />
                        </NavLink>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className='relative z-10 flex ml-auto lg:hidden' onClick={() => { setShow(!show) }}>
                        <HamburgerMenuIcon />
                    </NavigationMenu.Item>

                    {/* Nav Desktop */}
                    <div className='items-center hidden gap-4 text-sm lg:flex'>
                        {links.map((link) => {

                            if (link.type === 'link') {
                                return (

                                    <NavigationMenu.Item key={link.url} className='px-4 py-2 transition duration-200 ease-in-out bg-opacity-0 rounded hover:bg-primary hover:bg-opacity-20'>
                                        <NavLink
                                            to={link.url === 'beranda' ? '/' : link.url}
                                            className={({ isActive }) => (isActive ? ' font-semibold py-4' : `text-greyCol hover:text-black py-4 ${boldNoRuin}`)}
                                            title={toCapitalize(link.url)}
                                        >
                                            {toCapitalize(link.url)}
                                        </NavLink>
                                    </NavigationMenu.Item>

                                )
                            }

                            // Dropdown Nav
                            return (
                                <NavigationMenu.Item key={link.url}>
                                    <NavigationMenu.Trigger className={`px-4 py-2 rounded flex items-center group data-[state=open]:bg-primary data-[state=open]:bg-opacity-20 data-[state=open]:text-black data-[state=open]:font-semibold capitalize  ${location.pathname.match('profile') ? 'font-semibold text-black' : 'text-greyCol'}`} title={link.url}>
                                        <p className={`${boldNoRuin}`} title={link.url}>{link.url}</p>
                                        <TriangleDownIcon
                                            className='transition-transform mt-[2px] duration-[250] ease-in group-data-[state=open]:-rotate-180'
                                            aria-hidden
                                        />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content className='shadow absolute flex flex-col mt-4 outline outline-1 outline-[#D1D5DB] bg-white rounded-[7px] data-[state=open]:animate-dropDown animate-dropDownOut -ms-[50px]'>

                                        {link.options.map((option) => (

                                            <NavLink key={option} to={`${link.url}/${option}`} className={`capitalize  hover:bg-primary hover:bg-opacity-20 py-4 px-6 hover:font-semibold ${boldNoRuin}`} title={option}>{option}</NavLink>

                                        ))}

                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                            )

                        })}
                    </div>

                    {/* Mobile Nav */}
                    {show &&
                        <div className={`lg:hidden w-full absolute flex-col text-center bg-white top-[100px] gap-4 shadow transition animate-navDown -z-50`}>
                            {links.map((link) => {

                                if (link.type === 'link') {
                                    return (

                                        <NavigationMenu.Item key={link.url} className='px-4 py-2 transition duration-200 ease-in-out bg-opacity-0 rounded hover:bg-primary hover:bg-opacity-20'>
                                            <NavLink
                                                to={link.url === 'beranda' ? '/' : link.url}
                                                className={({ isActive }) => (isActive ? ' font-semibold py-4' : `text-greyCol hover:text-black py-4 ${boldNoRuin}`)}
                                                title={toCapitalize(link.url)}
                                                onClick={() => { setShow(!show) }}
                                            >
                                                {toCapitalize(link.url)}
                                            </NavLink>
                                        </NavigationMenu.Item>

                                    )
                                }

                                return (
                                    <AccordionComponent key={link.url} title={link.url}>
                                        {link.options.map((option) => (

                                            <NavLink
                                                key={option}
                                                to={`${link.url}/${option}`}
                                                className={`flex justify-center gap-4 py-2 capitalize`}
                                                title={option}
                                                onClick={() => { setShow(!show) }}
                                            >
                                                {option}
                                            </NavLink>

                                        ))}
                                    </AccordionComponent>
                                )
                            })}
                        </div>
                    }
                </NavigationMenu.List>
            </div >

        </NavigationMenu.Root >
    );
}

export default Nav;