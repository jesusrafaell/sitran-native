import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const InputText = (props: any) => {
	const { name, label, error, touched, extraStyles, setFieldValue } = props;
	return (
		<View style={styles.inputText}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={[extraStyles, error && styles.activeError]}
				{...props}
				onChangeText={(value) => setFieldValue(name, value)}
			/>
			{error && touched ? <Text style={styles.error}>{error}</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	inputText: {
		margin: 4,
	},
	label: {
		color: '#fff',
		textTransform: 'none',
		fontSize: 10,
	},
	error: {
		fontSize: 13,
		//color: theme.colors.error,
		paddingTop: 8,
	},
	activeError: {
		borderWidth: 1,
		borderColor: '#ba000d',
	},
});

export default InputText;
