import Stopwatch from "../components/stopwatch/stopwatch";

export const metadata = {
    title: 'Stopwatch - Games',
}

export default function Index() {

	return (
		<section className="flex flex-col justify-center items-center min-h-[calc(100vh-32px)]">
			<h1 className="text-center text-24 font-bold mb-24">Stop Watch</h1>
            <Stopwatch/>
		</section>
	);
}

