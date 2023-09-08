import useForm from '../../hooks/Form/useForm';

function Form() {
	const {
		handleChange,
		handleSubmit,
		validateCURP,
		validateRFC,
		values
	} = useForm({
		RFC: '',
		CURP: ''
	});

	return (
		<>
			<form
				className="flex flex-col items-center justify-center min-h-screen "
				onSubmit={handleSubmit}>
				<label className="block text-blue-700 text-sm font-bold mb-2">
					Ingresa tu CURP:
					<input
						type="text"
						name="CURP"
						value={values.CURP}
						onChange={handleChange}
					/>
				</label>

				<label className="block text-blue-700 text-sm font-bold mb-2">
					Ingresa tu RFC:
					<input
						type="text"
						name="RFC"
						value={values.RFC}
						onChange={handleChange}
					/>
				</label>

				<button onClick={() => validateRFC(values.RFC)}>
					validar RFC
				</button>

				<button onClick={() => validateCURP(values.CURP)}>
					validar CURP
				</button>
			</form>
		</>
	);
}

export default Form;
