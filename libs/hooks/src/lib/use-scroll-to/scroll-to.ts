export function useScrollTo() {
	const handleScroll = (id: string) => {
		// if (ref.current) {
		// 	ref.current.scrollIntoView({ behavior: 'smooth' });
		// }

		const scrollTo = document.getElementById(id);
		if (scrollTo) {
			scrollTo.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return {
		handleScroll,
	};
}

export default useScrollTo;
