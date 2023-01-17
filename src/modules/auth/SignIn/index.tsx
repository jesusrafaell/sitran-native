import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import FormSignIn from './components/FormSignIn';
import useSignIn from './hooks/useSignIn';

const bg = require('../../../../Images/fondoTranred.jpeg');

const SignIn = () => {
	const { formik } = useSignIn();

	return (
		<View style={styles.container}>
			<ImageBackground source={bg} resizeMode='cover' style={styles.background}>
				<View style={styles.containerForm}>
					<Text style={styles.title}>Sitran</Text>
					<FormSignIn formik={formik} />
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		// width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerForm: {
		// flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '80%',
		margin: 'auto',
		padding: 32,
		// maxHeight: '',
		height: 'fit-content',
		backgroundColor: 'rgba(255, 255, 255, 0.25)',
		backdropFilter: 'blur(12px)',
		'-webkit-backdrop-filter': 'blur(12px)',
		borderRadius: 20,
	},
	title: {
		fontSize: 80,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'none',
		letterSpacing: 2,
		// padding: 20,
	},
});

export default SignIn;
