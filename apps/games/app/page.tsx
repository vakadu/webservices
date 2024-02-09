import Link from "next/link";

export default async function Index() {
	return (
		<section className="px-24 py-24">
			<h1 className="text-32 text-center font-bold mb-24">Games</h1>
			<section className="grid grid-cols-4 gap-24">
				<Link
					className="border bg-white text-center p-16 rounded-md shadow-2 text-16 hover:font-semibold"
					href='/stop-watch'
				>
					1. Stop Watch
				</Link>
				<Link
					className="border bg-white text-center p-16 rounded-md shadow-2 text-16 hover:font-semibold"
					href='/digital-clock'
				>
					2. Digital Clock
				</Link>
				<Link
					className="border bg-white text-center p-16 rounded-md shadow-2 text-16 hover:font-semibold"
					href='/calculator'
				>
					3. Calculator
				</Link>
			</section>
		</section>
	);
}
