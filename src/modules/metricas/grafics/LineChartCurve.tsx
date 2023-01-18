import React from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { BarChart, LineChart, PieChart, StackedBarChart } from 'react-native-chart-kit';
import { ChartConfig, ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { styles } from './styles';

const bg = require('../../../../Images/fondoTranred.jpeg');
const img = require('../../../../Images/tranred-logo.png');

const screenWidth = Dimensions.get('window').width;

const chartConfig: ChartConfig = {
	backgroundColor: 'blue',
	backgroundGradientFrom: '#020024',
	backgroundGradientTo: '#212157',
	decimalPlaces: 0, // optional, defaults to 0
	color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
	labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
	style: {
		borderRadius: 16,
	},
	propsForBackgroundLines: {
		strokeWidth: 1,
		strokeDasharray: null,
		stroke: `rgba(255, 255, 255, 0.1)`,
	},
	propsForVerticalLabels: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	propsForDots: {
		r: '4', //tamano del circulo
		strokeWidth: '2', //tamano del raya del circulo
		stroke: '#fa0000',
	},
};

interface Props {
	data: ChartData;
}

const LineChartCurve = ({ data }: Props) => {
	return (
		<View style={styles.grafic}>
			<LineChart
				data={data}
				width={screenWidth} // from react-native
				height={400}
				yAxisLabel=''
				yAxisSuffix=''
				chartConfig={chartConfig}
				bezier //curvas
				fromZero={true}
				yAxisInterval={1} //intervao de los elemntos de abajo
				// withHorizontalLines={false}
				// segments={5}
				style={{
					marginVertical: 8,
					borderRadius: 3,
				}}
			/>
		</View>
	);
};

export default LineChartCurve;
