import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { TriangleDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { links } from '../constants';
import logo from '../assets/inr.png';
import { boldNoRuin, toCapitalize } from '../utils';
import AccordionComponent from './Accordion';
import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'

const DesktopNav = () => {
	// const location = useLocation();
	return (
		<NavigationMenu.Root
			className='fixed z-20 hidden lg:flex h-[80px] w-full items-center justify-between bg-white px-5 shadow sm:px-10 xl:px-[156px] 2xl:px-[348px]'
			orientation='vertical'
		>
			<div className='w-full'>
				<NavigationMenu.List className='relative z-10 flex min-w-max items-center lg:justify-between'>
					<NavigationMenu.Item className=''>
						<NavLink to='/'>
							<img
								src={logo}
								alt='Logo Inready Workgroup'
								className='mx-auto h-[80px] hover:text-black lg:mx-0'
							/>
						</NavLink>
					</NavigationMenu.Item>

					{/* <NavigationMenu.Item
						className='relative z-10 ml-auto flex lg:hidden'
						onClick={() => {
							setShow(!show);
						}}
					>
						<HamburgerMenuIcon />
					</NavigationMenu.Item> */}

					{/* Nav Desktop */}
					<div className='items-center gap-4 text-sm flex'>
						{links.map((link) => {
							if (link.type === 'link') {
								return (
									<NavigationMenu.Item
										key={link.url}
										className='rounded bg-opacity-0 px-4 py-2 transition duration-500 ease-in-out hover:bg-primary/20'
									>
										<NavLink
											to={
												link.url === 'beranda'
													? '/'
													: link.url
											}
											className={({ isActive }) =>
												isActive
													? ' py-4 font-semibold'
													: `py-4 text-greyCol hover:text-black ${boldNoRuin}`
											}
											title={toCapitalize(link.url)}
										>
											{toCapitalize(link.url)}
										</NavLink>
									</NavigationMenu.Item>
								);
							}

							// Dropdown Nav
							return (
								<NavigationMenu.Item key={link.url}>
									<NavigationMenu.Trigger
										className={`group flex items-center rounded px-4 py-2 capitalize data-[state=open]:bg-primary/20 data-[state=open]:font-semibold data-[state=open]:text-black`}
										title={link.url}
									>
										<p
											className={`${boldNoRuin}`}
											title={link.url}
										>
											{link.url}
										</p>
										<TriangleDownIcon
											className='mt-[2px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180'
											aria-hidden
										/>
									</NavigationMenu.Trigger>
									<NavigationMenu.Content className='absolute -ms-[50px] mt-4 flex animate-dropDownOut flex-col rounded-[7px] bg-white shadow outline outline-1 outline-[#D1D5DB] data-[state=open]:animate-dropDown overflow-hidden'>
										{link.options.map((option) => (
											<NavLink
												key={option}
												to={`${link.url}/${option}`}
												className={`px-6  py-4 capitalize hover:bg-primary hover:bg-opacity-20 hover:font-semibold ${boldNoRuin}`}
												title={option}
											>
												{option}
											</NavLink>
										))}
									</NavigationMenu.Content>
								</NavigationMenu.Item>
							);
						})}
					</div>
				</NavigationMenu.List>
			</div>
		</NavigationMenu.Root>
	);
};

const MobileNav = () => {
	const [show, setShow] = useState(false);

	return (
		<nav className='h-[80px] fixed bg-white w-full z-50 lg:hidden flex items-center justify-between px-5 sm:px-10'>
			<NavLink to='/'>
				<img
					src={logo}
					alt='Logo Inready Workgroup'
					className='h-[80px] hover:text-black'
				/>
			</NavLink>
			<Hamburger toggled={show} toggle={setShow} size={28} color='#FFC400' />
			<div
				className={`absolute left-0 w-full flex-col gap-4 bg-white text-center shadow transition-all duration-500 lg:hidden ${show ? `opacity-100 top-[75px]` : `opacity-0 -top-[1000px]`}`}
			>
				{links.map((link) => {
					if (link.type === 'link') {
						return (
							<li
								key={link.url}
								className='rounded bg-opacity-0 px-4 py-2 transition duration-200 ease-in-out hover:bg-primary hover:bg-opacity-20 list-none'
							>
								<NavLink
									to={
										link.url === 'beranda'
											? '/'
											: link.url
									}
									className={({ isActive }) =>
										isActive
											? ' py-4 font-semibold'
											: `py-4 text-greyCol hover:text-black ${boldNoRuin}`
									}
									title={toCapitalize(link.url)}
									onClick={() => {
										setShow(!show);
									}}
								>
									{toCapitalize(link.url)}
								</NavLink>
							</li>
						);
					}

					return (
						<AccordionComponent
							key={link.url}
							title={link.url}
						>
							{link.options.map((option) => (
								<NavLink
									key={option}
									to={`${link.url}/${option}`}
									className={`flex justify-center gap-4 py-2 capitalize`}
									title={option}
									onClick={() => {
										setShow(!show);
									}}
								>
									{option}
								</NavLink>
							))}
						</AccordionComponent>
					);
				})}
			</div>
		</nav >
	)
}

const Nav = () => {

	return (
		<>
			<DesktopNav />
			<MobileNav />
		</>
	);
}

export default Nav;
