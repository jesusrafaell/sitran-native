import React from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { BarChart, LineChart, StackedBarChart } from 'react-native-chart-kit';
import { ChartConfig, ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { styles } from './styles';

const bg = require('../../../../Images/fondoTranred.jpeg');
const img = require('../../../../Images/tranred-logo.png');

const screenWidth = Dimensions.get('window').width;

const chartConfig: ChartConfig = {
	// backgroundColor: `rgba(255, 255, 255, 0.5)`,
	backgroundGradientToOpacity: 0,
	backgroundGradientFromOpacity: 0,
	// backgroundColor: 'white',
	backgroundGradientFrom: 'white',
	backgroundGradientTo: 'white',
	color: () => '#000',
	// fillShadowGradient: 'red',
	// fillShadowGradient: `rgba(55, 35, 106, 1)`,
	fillShadowGradientFromOpacity: 1,
	fillShadowGradientToOpacity: 1,
	fillShadowGradientFrom: `rgba(55, 35, 106, 1)`,
	fillShadowGradientTo: `rgba(55, 35, 106, 1)`,
	// fillShadowGradientToOpacity: 0.05,
	// backgroundColor: 'transparent',
	labelColor: () => `rgba(0, 0, 0, 1)`,
	decimalPlaces: 0,
	barPercentage: 0.8,
	barRadius: 1,
	propsForLabels: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	propsForBackgroundLines: {
		strokeWidth: 1,
		strokeDasharray: null,
		stroke: `rgba(0, 0, 0, 0.4)`,
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
					marginVertical: 6,
					borderRadius: 3,
					// width: '99%',
					borderWidth: 0.5,
					// color: 'red',
					// borderTopLeftRadius: 20,
					// borderTopRightRadius: 20,
					borderColor: '#000',
				}}
			/>
		</View>
	);
};

export default BarChartCustom;
