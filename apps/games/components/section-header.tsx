interface SectionHeaderProps {
    title: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
    const { title } = props;

    return (
        <h1 className="text-center text-24 font-bold mb-24">{title}</h1>
    )
}
