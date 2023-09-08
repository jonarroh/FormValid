interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<>
			<header className="bg-slate-700">
				<h1 className="text-2xl  text-blue-500 p-4">SAT</h1>
			</header>
			<main className="flex flex-col items-center justify-center min-h-screen bg-[#383838]">
				{children}
			</main>
		</>
	);
}

export default Layout;
