import Link from "next/link";

export default function Index() {
	return (
		<nav className="px-16 py-16 flex justify-center items-center">
			<Link className="font-medium text-[24px] hover:text-brand" href="/circles">
				Circles.
			</Link>
		</nav>
	);
}
