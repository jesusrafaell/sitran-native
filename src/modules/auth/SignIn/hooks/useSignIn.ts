import { useFormik } from 'formik';
import { handleLogin } from './handles';

const useSignIn = () => {
	const formik = useFormik({
		initialValues: {
			user: '',
			password: '',
		},
		onSubmit: async (values) => {
			await submit(values.user, values.password);
		},
	});
	const submit = async (user: string, password: string) => {
		const aux = await handleLogin(user, password);
		console.log(aux);
	};

	const navigateToRegister = () => {
		alert('aqui voy a navegar');
	};

	return { formik, navigateToRegister };
};

export default useSignIn;
