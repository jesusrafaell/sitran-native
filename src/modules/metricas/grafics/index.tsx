import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { BarChart, LineChart, StackedBarChart } from 'react-native-chart-kit';
import { styles } from './styles';

const bg = require('../../../../Images/fondoTranred.jpeg');
const img = require('../../../../Images/tranred-logo.png');

const screenWidth = Dimensions.get('window').width;

const data = {
	labels: ['carropago', 'librepago', 'milpagos', 'bvc', 'plaza', 'bnc'],
	datasets: [
		{
			data: [20000, 60000, 140000, 1000, 2000, 15000],
			color: (opacity = 1) => `rgba(55, 35, 106, ${opacity})`, // optional
			strokeWidth: 4, // optional
		},
	],
	legend: ['Cantidad de POS Transando'], // optional
};

// const chartConfig = {
// 	backgroundGradientFrom: '#1E2923',
// 	backgroundGradientFromOpacity: 0,
// 	backgroundGradientTo: '#08130D',
// 	backgroundGradientToOpacity: 0.5,
// 	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
// 	strokeWidth: 2, // optional, default 3
// 	barPercentage: 0.5,
// 	useShadowColorFromDataset: false, // optional
// };

const chartConfig = {
	backgroundGradientFrom: '#fff',
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: '#fff',
	backgroundGradientToOpacity: 0.5,

	// fillShadowGradient,
	fillShadowGradientOpacity: 1,
	color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
	labelColor: (opacity = 1) => `#333`,
	strokeWidth: 2,

	barPercentage: 0.5,
	useShadowColorFromDataset: false,
	decimalPlaces: 0,
};

const Grafic = () => {
	return (
		<View style={styles.container}>
			<LineChart data={data} width={screenWidth} height={220} chartConfig={chartConfig} />
			{/* <LineChart
				data={data}
				width={Dimensions.get('window').width} // from react-native
				height={220}
				yAxisLabel='$'
				yAxisSuffix='k'
				yAxisInterval={1} // optional, defaults to 1
				chartConfig={{
					backgroundColor: '#e26a00',
					backgroundGradientFrom: '#fb8c00',
					backgroundGradientTo: '#ffa726',
					decimalPlaces: 2, // optional, defaults to 2dp
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16,
					},
					propsForDots: {
						r: '6',
						strokeWidth: '2',
						stroke: '#ffa726',
					},
				}}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16,
				}}
			/> */}
			<Text>Grafica de Jesus</Text>
		</View>
	);
};

export default Grafic;
