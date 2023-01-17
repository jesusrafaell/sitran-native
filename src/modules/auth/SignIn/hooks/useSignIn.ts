import { useFormik } from 'formik';

const useSignIn = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			submit(values);
		},
	});
	const submit = (values: any) => {
		alert(JSON.stringify(values, null, 2));
	};

	const navigateToRegister = () => {
		alert('aqui voy a navegar');
	};

	return { formik, navigateToRegister };
};

export default useSignIn;
