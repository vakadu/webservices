import Link from "next/link";

/* eslint-disable-next-line */
export interface LogoVinodProps {}

export function LogoVinod(props: LogoVinodProps) {
	return (
		<Link 
			href='/'
			className="relative inline-block"
		>
			<span className="w-[32px] h-[32px] bg-brand inline-flex justify-center items-center text-white rounded-sm font-jost text-3xl">vi</span>
			<span className="pl-[3px] font-jost text-3xl dark:text-white">nod</span>
			<div className="w-2 h-2 bg-brand -right-[15px] absolute top-1/2 -translate-y-1/2 rounded-full"/>
		</Link>
	);
}

export default LogoVinod;