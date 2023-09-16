import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { TriangleDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { links } from '../constants';
import logo from '../assets/inr.png';
import { boldNoRuin, toCapitalize } from '../utils';
import AccordionComponent from './Accordion';
import { useState } from 'react';

const Nav = () => {
	// const location = useLocation();
	console.log('nav rendered');
	const [show, setShow] = useState(false);
	return (
		<NavigationMenu.Root
			className='fixed z-20 flex h-[80px] w-full items-center justify-between bg-white px-5 shadow sm:px-10 xl:px-[156px] 2xl:px-[348px]'
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

					<NavigationMenu.Item
						className='relative z-10 ml-auto flex lg:hidden'
						onClick={() => {
							setShow(!show);
						}}
					>
						<HamburgerMenuIcon />
					</NavigationMenu.Item>

					{/* Nav Desktop */}
					<div className='hidden items-center gap-4 text-sm lg:flex'>
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

					{/* Mobile Nav */}
					{show && (
						<div
							className={`absolute top-[100px] -z-50 w-full animate-navDown flex-col gap-4 bg-white text-center shadow transition lg:hidden`}
						>
							{links.map((link) => {
								if (link.type === 'link') {
									return (
										<NavigationMenu.Item
											key={link.url}
											className='rounded bg-opacity-0 px-4 py-2 transition duration-200 ease-in-out hover:bg-primary hover:bg-opacity-20'
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
										</NavigationMenu.Item>
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
					)}
				</NavigationMenu.List>
			</div>
		</NavigationMenu.Root>
	);
};

export default Nav;
