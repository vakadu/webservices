import cn from 'classnames';

/* eslint-disable-next-line */
export interface PortfolioSectionHeaderProps {
	title: string;
	classNames?: string;
}

export function PortfolioSectionHeader(props: PortfolioSectionHeaderProps) {
	const { title, classNames } = props;
	const classes = 'text-32 leading-[32px] lg:text-42 lg:leading-42 tracking-0.07 font-semibold uppercase mb-[60px]';

	return (
		<h2 className={cn(classNames, classes)}>
			{ title }
		</h2>
	);
}

export default PortfolioSectionHeader;
