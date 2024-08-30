import Link from 'next/link';

export default function Index() {
	return (
		<nav className="px-16 py-16 grid grid-cols-5 gap-24">
			<Link className="font-medium text-[24px] hover:text-brand" href="/timer">
				Timer
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/accordian">
				Accordian
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/previuos">
				Previuos
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/progressbar">
				Progress bar
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/carousel">
				Carousel
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/autocomplete">
				Auto Complete
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/password-check">
				Password Checker
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/user-avatar">
				User Avatar
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/star-rating">
				Star Rating
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/dictionary">
				Dictionary
			</Link>
			<Link className="font-medium text-[24px] hover:text-brand" href="/hooks/useeffect">
				Use Effect
			</Link>
		</nav>
	);
}
