import { Dimensions, StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
	grafic: {
		flex: 1,
		width: '100%',
		//justifyContent: 'center',
		alignItems: 'center',
	},
	listItem: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		width: Dimensions.get('window').width,
		height: 50,
	},
	textList: {
		padding: 8,
		fontSize: 18,
		fontWeight: '700',
	},
});
