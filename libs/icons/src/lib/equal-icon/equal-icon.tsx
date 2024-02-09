export function EqualIcon(props: React.SVGAttributes<object>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M20.75 7a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 0 1 0-2.5h17.5zm0 8.5a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5h17.5z"
			/>
		</svg>
	);
}

export default EqualIcon;
