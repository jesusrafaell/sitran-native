import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
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
	img: {
		width: 300,
		height: 100,
	},
});
