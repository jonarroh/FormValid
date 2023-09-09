interface AlertProps {
	title: string;
	type: 'success' | 'error' | 'warning' | 'info';
	message: string;
}
const colors = {
	success: 'bg-green-50 border-green-300 text-green-800',
	error: 'bg-red-50 border-red-300 text-red-800',
	warning: 'bg-yellow-50 border-yellow-300 text-yellow-800',
	info: 'bg-blue-50 border-blue-300 text-blue-800'
};

function Alert({ title, type, message }: AlertProps) {
	return (
		<>
			<div
				className={`w-full flex flex-col float-left justify-center items-center  align-middle p-4  text-smrounded-lg rounded-md ${colors[type]}`}
				role="alert">
				<div className="flex items-center justify-center ">
					<svg
						aria-hidden="true"
						width={20}
						height={20}
						className="flex-shrink-0  mr-3"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20">
						<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
					</svg>
					<span className="font-semibold uppercase">{title}</span>
				</div>
				<div>
					<span className="font-medium">{message}</span>
				</div>
			</div>
		</>
	);
}

export default Alert;
