interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<>
			<main className="flex flex-col h-screen bg-white scroll-me-0">
				{children}
			</main>
		</>
	);
}

export default Layout;
