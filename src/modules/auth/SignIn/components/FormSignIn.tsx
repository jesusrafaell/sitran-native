import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ButtonDefault from '../../../common/components/ButtonDefault';
import InputText from '../../../common/components/InputText';

interface FormProps {
	formik: any;
}

const FormSignIn = ({ formik }: FormProps) => {
	const { handleSubmit, setFieldValue, errors, touched, values } = formik;
	const [error, setError] = useState(false);

	const handleError = (errors: any) => {
		for (const err in errors) {
			if (errors[err]) {
				return true;
			}
		}
		return false;
	};

	useEffect(() => {
		setError(handleError(errors));
	}, errors);

	return (
		<View style={styles.form}>
			<View>
				<Text style={[styles.subTitle, styles[`text_${error ? 'error' : 'normal'}`]]}>
					{error ? 'Usario no existe' : 'Ingrese sus credenciales'}
				</Text>
			</View>
			<InputText
				name='email'
				// label='login'
				setFieldValue={setFieldValue}
				value={values.email}
				extraStyles={styles.input}
				error={errors.email}
				touched={touched.email}
				placeholder='Usuario'
			/>
			<InputText
				name='password'
				// label='Contrasena'
				setFieldValue={setFieldValue}
				extraStyles={styles.input}
				value={values.password}
				error={errors.password}
				touched={touched.password}
				secureTextEntry={true}
				placeholder='Contrasena'
			/>
			<View style={styles.button}>
				<ButtonDefault
					customTextStyle={styles.textButton}
					extraStyles={styles.button}
					text='Iniciar sesión'
					onPress={handleSubmit}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	form: {
		// width: '100%',
		// display: 'flex',
		alignItems: 'center',
		// justifyContent: 'center',
		// paddingVertical: 20,
		margin: 8,
	},
	input: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		borderRadius: 3,
		backgroundColor: '#e2e2e2',
		marginBottom: 4,
		width: 180,
	},
	button: {
		marginTop: 10,
		borderRadius: 3,
	},
	textButton: {
		fontSize: 18,
		padding: 5,
	},
	subTitle: {
		fontSize: 16,
		fontWeight: '600',
	},
	text_error: {
		color: '#ba000d',
	},
	text_normal: {
		color: '#D8D8D8',
	},
});

export default FormSignIn;
