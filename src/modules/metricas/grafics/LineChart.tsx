import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { BarChart, LineChart, StackedBarChart } from 'react-native-chart-kit';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { styles } from './styles';

const bg = require('../../../../Images/fondoTranred.jpeg');
const img = require('../../../../Images/tranred-logo.png');

const screenWidth = Dimensions.get('window').width;

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

interface Props {
	data: ChartData;
}

const LineChartCustom = ({ data }: Props) => {
	return (
		<View style={styles.grafic}>
			<LineChart
				data={data}
				width={screenWidth}
				height={400}
				fromZero={true}
				chartConfig={chartConfig}
				style={{
					marginVertical: 8,
					borderRadius: 3,
				}}
			/>
		</View>
	);
};

export default LineChartCustom;
