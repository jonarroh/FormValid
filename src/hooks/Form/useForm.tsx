import { useState } from 'react';

interface FormProps {
	RFC: string;
	CURP: string;
}

function useForm(initialValues: FormProps) {
	const [values, setValues] = useState(initialValues);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { RFC, CURP } = values;
		console.log(RFC, CURP);
	};

	const validateRFC = (rfc: string) => {
		return (
			rfc.length === 12,
			validate4Rfc(rfc),
			validateValues(values.CURP, rfc)
			)
	};

	const validateCURP = (curp: string) => {
		return (
			curp.length === 18,
			validate4Curp(curp),
			validateSex(curp),
			validateState(curp),
			validateValues(curp, values.RFC)
			)
	};

	const validateSex = (curp : string) => {
		return curp[10] === 'H' || curp[10] === 'M';
	}
	console.log('1',validateSex(values.CURP));
	
	const validateValues = (curp: string, rfc: string) => {
		return curp.slice(0, 10) === rfc.slice(0, 10);
	};
	console.log('2',validateValues(values.CURP, values.RFC));
	
	const estados = ['AS', 'BC', 'BS', 'CC', 'CL', 'CM', 'CS', 'CH', 'DF', 'DG', 'GT', 'GR', 'HG', 'JC', 'MC', 'MN', 'MS', 'NT', 'NL', 'OC', 'PL', 'QO', 'QR', 'SP', 'SL', 'SR', 'TC', 'TS', 'TL', 'VZ', 'YN', 'ZS'];

	const validateState = (curp: string) => {
		return estados.indexOf(curp.substr(11, 2)) >= 0;
	};
	console.log('3',validateState(values.CURP));

	const validate4Curp = (curp: string) => {
		const regex = /^[A-Za-z]{4}/;
		return regex.test(curp);
	};
	console.log('4',validate4Curp(values.CURP));

	const validate4Rfc = (rfc: string) => {
		const regex = /^[A-Za-z]{4}/;
		return regex.test(rfc);
	};
	console.log('5',validate4Rfc(values.RFC));
	



	return {
		values,
		handleChange,
		handleSubmit,
		validateCURP,
		validateRFC,
		validateSex,
		validateValues,
		validateState,
		validate4Curp,
		validate4Rfc
	};
}



export default useForm;
