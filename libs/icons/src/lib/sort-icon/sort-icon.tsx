// eslint-disable-next-line @typescript-eslint/ban-types
export function SortIcon(props: React.SVGAttributes<{}>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="#000"
			{...props}
		>
			<path d="M22,4.5a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2h9A1,1,0,0,1,22,4.5Zm-1,4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,5H16a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm0,5H18a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2ZM6,2A1,1,0,0,0,5,3V18.586L3.707,17.293a1,1,0,0,0-1.414,1.414l3,3a1,1,0,0,0,1.416,0l3-3a1,1,0,0,0-1.414-1.414L7,18.586V3A1,1,0,0,0,6,2Z"/>
		</svg>
	);
  }

export default SortIcon;
