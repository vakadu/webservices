import { LinkedinIcon, TwitterIcon } from "@webservices/icons";

/* eslint-disable-next-line */
export interface PortfolioFooterProps {}

export function PortfolioFooter(props: PortfolioFooterProps) {
	return (
		<footer className="bg-white py-80">
			<section className="max-w-[1300px] mx-auto flex justify-between items-center px-16 md:px-24">
				<article 
					className="grid grid-cols-2 gap-12"
				>
					<a 
						target="_blank" 
						rel="nofollow noreferrer" 
						href="https://twitter.com/vakadu"
						className="mr-16 relative inline-block"
					>
						<TwitterIcon className="w-24 h-24"/>
					</a>
					<a 
						target="_blank" 
						rel="nofollow noreferrer" 
						href="https://www.linkedin.com/in/vinod-kumar-6073b4117/"
						className="mr-16 relative inline-block"
					>
						<LinkedinIcon className="w-24 h-24"/>
					</a>
				</article>
				<article>
					<p className="text-12 font-semibold">
						Vinod Kumar
					</p>
				</article>
			</section>
		</footer>
	);
}

export default PortfolioFooter;
