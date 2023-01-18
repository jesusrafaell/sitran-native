import useAxios from '../../../../config';

export const handleLogin = async (user: String, password: String) => {
	// swalLoading();
	try {
		// console.log('entrer');
		console.log('login:', user, password);
		console.log(useAxios.defaults);
		const res = await useAxios.post('/auth/login', { user, password });
		alert(user + ' & ' + password);
		console.log('response', res);
		return true;
	} catch (err: any) {
		console.log('err', err?.response?.data?.message);
		alert(err?.response?.data?.message || 'ERROR');
		return false;
	}
};
