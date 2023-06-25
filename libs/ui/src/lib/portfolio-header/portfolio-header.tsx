"use client";

/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";

import { toggleMenu } from "@webservices/utils";
import LogoVinod from "../logo-vinod/logo-vinod";
import { DarkIcon, LightIcon } from "@webservices/icons";

/* eslint-disable-next-line */
export interface PortfolioHeaderProps {}

export function PortfolioHeader(props: PortfolioHeaderProps) {
	const [day, setDay] = useState<boolean>(false);

	useEffect(() => {
		if(day) {
			document.querySelector('body')?.classList.add('light');
			document.querySelector('body')?.classList.remove('dark');
		} else {
			document.querySelector('body')?.classList.add('dark');
			document.querySelector('body')?.classList.remove('light');
		}
	}, [day]);

	return (
		<header className='header absolute top-0 left-0 px-30 py-12 w-full z-[90] transition-all 
			duration-0.3 ease-smooth-header'>
			<div className="flex justify-between items-center">
				<div className="">
					<LogoVinod/>
				</div>
				<div className="flex-1 flex justify-end items-center">
					<a
						href="#"
						className={`skin-switcher relative inline-block text-center align-middle h-30 w-25 mr-40 ${day ? "" : "active"}`}
						onClick={(e) => {
							e.preventDefault();
							setDay(!day);
						}}
					>
						<span className="dark absolute top-1/2 left-1/2 leading-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2">
							<DarkIcon className="max-w-[25px] opacity-100 pointer-events-auto visible"/>
						</span>
						<span className="light absolute top-1/2 left-1/2 leading-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2">
							<LightIcon className="max-w-[25px] opacity-0 pointer-events-none invisible"/>
						</span>
					</a>
					<a
						href="#"
						className="h-30 w-28 relative mx-12 menu-btn"
						onClick={(e) => toggleMenu(e)}
					>
						<span className="w-full bg-black dark:bg-white h-2 absolute block top-8 transition-all duration-0.3 ease-smooth-header"/>
						<span className="w-full bg-black dark:bg-white h-2 absolute block bottom-8 transition-all duration-0.3 ease-smooth-header"/>
					</a>
					<div className="menu-overlay">

					</div>
				</div>
			</div>
		</header>
	);
}

export default PortfolioHeader;
