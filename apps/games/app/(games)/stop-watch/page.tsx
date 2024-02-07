import SectionHeader from "../../../components/section-header";
import Stopwatch from "../../../components/stopwatch/stopwatch";

export const metadata = {
    title: 'Stopwatch - Games',
}

export default function Index() {

	return (
		<>
			<SectionHeader title="Stop Watch"/>
            <Stopwatch/>
		</>
	);
}

