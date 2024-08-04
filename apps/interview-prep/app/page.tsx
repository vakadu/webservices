import Link from "next/link";

export default function Index() {
	return (
		<nav className="px-16 py-16 flex justify-center items-center gap-24">
			<Link className="font-medium text-[24px] hover:text-brand" href="/circles">
				Circles
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/interactive-shapes">
				Interactive Shapes
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/tree-navigation">
				Tree Nav
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/pagination">
				Pagination
			</Link>
		</nav>
	);
}
