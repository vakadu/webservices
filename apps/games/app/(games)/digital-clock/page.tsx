import DigitalClock from "../../../components/clock/clock"
import SectionHeader from "../../../components/section-header"

export const metadata = {
    title: 'Digital Clock - Games',
}

export default function Index() {
    return (
        <>
            <SectionHeader title="Digital Clock"/>
            <DigitalClock/>
        </>
    )
}
