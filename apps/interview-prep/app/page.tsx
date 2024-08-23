import Link from "next/link";

export default function Index() {
	return (
		<nav className="px-16 py-16 flex justify-center items-center gap-24">
			<Link className="font-medium text-[24px] hover:text-brand" href="/timer">
				Timer
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/accordian">
				Accordian
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/previuos">
				Previuos
			</Link>
		</nav>
	);
}
