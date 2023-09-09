import toast from 'react-hot-toast';
import useForm from '../../hooks/Form/useForm';
import Alert from '../Alert/Alert';

function Form() {
	const {
		handleChange,
		handleSubmit,
		validateCURP,
		validateRFC,
		errors,
		values
	} = useForm({
		RFC: '',
		CURP: ''
	});

	return (
		<>
			<form
				className="flex flex-col items-center justify-center min-h-screen"
				onSubmit={handleSubmit}>
				<h1 className="text-4xl text-center text-blue-700 font-bold mb-5">
					Iniciar sesión
				</h1>
				<div className="mb-5">
					<label className=" text-blue-400 text-sm font-bold ">
						Ingresa tu CURP:
						<input
							className="block py-2 px-3 rounded bg-gray-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 "
							placeholder="AAAA000000AAAAAA00"
							required
							type="text"
							name="CURP"
							value={values.CURP}
							onChange={handleChange}
						/>
					</label>
					{errors.CURP && (
						<p className="text-red-500 text-xs  ">{errors.CURP}</p>
					)}
				</div>

				<div className="mb-5">
					<label className="text-blue-400 text-sm font-bold mb-5">
						Ingresa tu RFC:
						<input
							className="block py-2 px-3 rounded bg-gray-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							type="text"
							required
							placeholder="xaxx010101000"
							name="RFC"
							value={values.RFC}
							onChange={handleChange}
						/>
					</label>
					{errors.RFC && (
						<p className="text-red-500 text-xs italic">
							{errors.RFC}
						</p>
					)}
				</div>

				<div className="flex flex-row justify-center gap-5 mb-5">
					<button
						onClick={() => {
							validateRFC(values.RFC);
							toast.custom(t => (
								<>
									<div
										className={`${
											t.visible ? 'animate-enter' : 'animate-leave'
										} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
										<Alert
											message="hola"
											type="success"
											title="hola"
										/>
									</div>
								</>
							));
						}}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
						Validar RFC
					</button>

					<button
						onClick={() => validateCURP(values.CURP)}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
						Validar CURP
					</button>
				</div>
			</form>
		</>
	);
}

export default Form;
