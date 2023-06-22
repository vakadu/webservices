import LogoVinod from "../logo-vinod/logo-vinod";

/* eslint-disable-next-line */
export interface PortfolioHeaderProps {}

export function PortfolioHeader(props: PortfolioHeaderProps) {
	return (
		<header className='header absolute top-0 left-0 px-30 py-12 w-full z-[90] transition-all 
			duration-0.3 ease-smooth-header'>
			<div className="flex justify-between items-center">
				<div className="">
					<LogoVinod/>
				</div>
				<div className="flex-1 text-right">
					Menu
				</div>
			</div>
		</header>
	);
}

export default PortfolioHeader;
