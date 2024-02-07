export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <main className="body-section">
            {children}
        </main>
    );
}
