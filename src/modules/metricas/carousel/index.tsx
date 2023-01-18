import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { TouchableRipple } from 'react-native-paper';
import data from '../data';
import BarChartCustom from '../grafics/BarChart';
import LineChartCustom from '../grafics/LineChart';
import LineChartCurve from '../grafics/LineChartCurve';

//const bg = require('../../../../Images/fondoTranred.jpeg');

const Carousel = () => {
	const [typeChart, setTypeChart] = useState(2);

	const charts = (data: ChartData, typeChart: number): JSX.Element => {
		switch (typeChart) {
			case 0:
				return <BarChartCustom data={data} />;
			case 1:
				return <LineChartCustom data={data} />;
			case 2:
				return <LineChartCurve data={data} />;
			default:
				return <BarChartCustom data={data} />;
		}
	};

	console.log(typeChart);

	return (
		<View style={styles.container}>
			<TouchableRipple onPress={() => setTypeChart(typeChart < 3 ? typeChart + 1 : 0)}>
				<FlatList
					data={data}
					renderItem={({ item }) => {
						return (
							<View style={styles.containerGrafic}>
								<Text style={styles.title}>{item.name}</Text>
								{charts(item.data, typeChart)}
							</View>
						);
					}}
					horizontal
					pagingEnabled
					snapToAlignment='center'
					showsHorizontalScrollIndicator={false}
					// keyExtractor={(item) => item.id}
					// onScroll={handleOnScroll}
					// onViewableItemsChanged={handleOnViewableItemsChanged}
					// viewabilityConfig={viewabilityConfig}
				/>
			</TouchableRipple>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		//colocarle clases a este elemtno tumba todo
		// flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		// width: '100%',
	},
	containerGrafic: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerBottom: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// width: '100%',
	},
	background: {
		height: '100%',
		flex: 1,
		// width: '100%',
		// justifyContent: 'center',
		// alignItems: 'center',
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
		fontSize: 15,
		color: '#000',
		fontWeight: 'bold',
		textTransform: 'none',
	},
});

export default Carousel;
