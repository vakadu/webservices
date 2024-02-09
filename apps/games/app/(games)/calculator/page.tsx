import Calculator from "../../../components/calculator/calculator";
import SectionHeader from "../../../components/section-header";

export const metadata = {
    title: 'Calculator - Games',
}

export default function Index() {

	return (
		<>
			<SectionHeader title="Calculator"/>
            <Calculator/>
		</>
	);
}

