import axios from 'axios';
import { getItemAsync, setItemAsync } from 'expo-secure-store';
import { configure } from 'axios-hooks';

const dev = `http://192.168.23.21:2022`;

const useAxios = axios.create({
	baseURL: dev,
	headers: {
		// token: localStorage.getItem('token'),
		// Authorization: await SecureStore.getItemAsync('token'),
		key_agregador: '5',
	},
});

useAxios.defaults.headers['Content-Type'] = 'application/json';

useAxios.interceptors.response.use(async (resp) => {
	if (resp.data.access_token) {
		console.log('res', resp.data.access_token);
		await setItemAsync('token', resp.data.access_token);
		resp.headers.Authorization = resp.data.access_token;
	}
	resp.headers.key_agregador = '5';
	return resp;
});

useAxios.interceptors.request.use(async (config) => {
	if (config.headers) {
		const token = getItemAsync('token');
		console.log('req', token);
		config.headers.Authorization = `${token}`;
		config.headers.key_agregador = '5';
	}
	return config;
});

configure({ axios });

export default useAxios;
