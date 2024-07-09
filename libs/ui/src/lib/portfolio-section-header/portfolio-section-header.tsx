import cn from 'classnames';

/* eslint-disable-next-line */
export interface PortfolioSectionHeaderProps {
	title: string;
	classNames?: string;
}

export function PortfolioSectionHeader(props: PortfolioSectionHeaderProps) {
	const { title, classNames } = props;
	const classes = `text-32 re leading-[32px] lg:text-42 lg:leading-42 tracking-0.07 
		font-semibold uppercase mb-[60px] after:w-[45px] after:h-[45px] after:absolute
		after:rounded-full after:bg-brand relative after:left-[-15px] after:top-[-8px] 
		after:z-[-1] z-[1] after:animate-slide-up-down`;

	return (
		<h2 
			className={cn(classNames, classes)}
			data-aos="fade-up"
			data-aos-duration="500"
			data-aos-delay="300"
		>
			{ title }
		</h2>
	);
}

export default PortfolioSectionHeader;
