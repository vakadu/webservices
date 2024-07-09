// eslint-disable-next-line @typescript-eslint/ban-types
export function DesktopIcon(props: React.SVGAttributes<{}>) {
  	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 25 25"
			fill="none"
			{...props}
		>
			<path 
				d="M4.5 14.5V16.5C4.5 17.0523 4.94772 17.5 5.5 17.5H12.5M4.5 14.5V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V14.5M4.5 14.5H20.5M20.5 14.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H12.5M12.5 17.5V20.5M12.5 20.5H8M12.5 20.5H17" 
				stroke="currentColor" 
				strokeWidth="1.2"
			/>
		</svg>
	);
}

export default DesktopIcon;
