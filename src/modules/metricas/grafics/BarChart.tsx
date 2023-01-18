import React from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { BarChart, LineChart, StackedBarChart } from 'react-native-chart-kit';
import { ChartConfig, ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { styles } from './styles';

const bg = require('../../../../Images/fondoTranred.jpeg');
const img = require('../../../../Images/tranred-logo.png');

const screenWidth = Dimensions.get('window').width;

const chartConfig: ChartConfig = {
	backgroundGradientFromOpacity: 0.5,
	backgroundGradientFrom: 'gray',
	backgroundGradientTo: 'blue',
	color: () => 'white',
	fillShadowGradient: 'green',
	fillShadowGradientOpacity: 1,
	labelColor: () => `rgba(0, 0, 0, 1)`,
	decimalPlaces: 0,
	barPercentage: 0.8,
	barRadius: 1,
	propsForBackgroundLines: {
		strokeWidth: 1,
		strokeDasharray: null,
		stroke: `rgba(0, 0, 0, 0.2)`,
	},
};

interface Props {
	data: ChartData;
}

const BarChartCustom = ({ data }: Props) => {
	return (
		<View style={styles.grafic}>
			<BarChart
				data={data}
				width={screenWidth}
				height={400}
				chartConfig={chartConfig}
				showValuesOnTopOfBars={true}
				// showBarTops={true}
				yAxisLabel=''
				yAxisSuffix=''
				fromZero={true}
				segments={4}
				style={{
					marginVertical: 8,
					borderRadius: 3,
				}}
			/>
		</View>
	);
};

export default BarChartCustom;
