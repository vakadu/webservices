'use client';

/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';

import LogoVinod from '../logo-vinod/logo-vinod';
import { DarkIcon, LightIcon } from '@webservices/icons';

/* eslint-disable-next-line */
export interface PortfolioHeaderProps {}

export function PortfolioHeader(props: PortfolioHeaderProps) {
	useEffect(() => {
		document.querySelector('body')?.classList.add('light');
	}, []);

	return (
		<header
			className="header absolute top-0 left-0 px-12 py-18 lg:px-30 lg:py-24 w-full z-[90] transition-all 
			duration-0.3 ease-smooth-header"
		>
			<section className="flex justify-between items-center max-w-[1300px] mx-auto">
				<LogoVinod />
				<article className="flex-1 flex flex-col md:flex-row justify-end items-end md:items-center">
					<a href="tel:+919972380619" className="md:mr-32 text-14 font-semibold">
						+91 - 9972380619
					</a>
					<a href="mailto:vakadu10@gmail.com" className="md:mr-40 text-14 font-semibold">
						vakadu10@gmail.com
					</a>
					{/* <a
						href="#"
						className={`
							skin-switcher relative inline-block text-center align-middle 
							h-30 w-25 mr-32 lg:mr-40
						`}
						onClick={(e) => {
							e.preventDefault();
							toggleMode(mode === 'dark' ? 'light' : 'dark');
						}}
					>
						<span className="absolute top-1/2 left-1/2 leading-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2">
							{
								mode === "dark" ?
									<LightIcon className="max-w-[25px]"/>
									:
									<DarkIcon className="max-w-[25px]"/>
							}
						</span>
					</a> */}
					{/* <a
						href="#"
						className="h-30 w-28 relative lg:mx-12 menu-btn z-4"
						onClick={(e) => toggleMenu(e)}
					>
						<span className="w-full bg-black dark:bg-white h-2 absolute block top-8 transition-all duration-0.3 ease-smooth-header"/>
						<span className="w-full bg-black dark:bg-white h-2 absolute block bottom-8 transition-all duration-0.3 ease-smooth-header"/>
					</a> */}
					{/* <div className="menu-overlay fixed w-[512px] h-full z-3 
						min-h-screen right-[-612px] opacity-0 invisible pointer-events-none 
						transition-all duration-1 ease-smooth-header before:content-['']
						before:absolute before:top-0 before:left-0 before:w-full before:h-full
						before:bg-white before:transition-all before:duration-1 before:ease-smooth-header
						before:skew-x-10 before:skew-y-0 before:dark:bg-dark-drawer
					">
						<div className="absolute top-0 left-0 overflow-hidden w-full h-full flex items-center">

						</div>
					</div> */}
				</article>
			</section>
		</header>
	);
}

export default PortfolioHeader;
