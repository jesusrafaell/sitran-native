import { formToJSON } from 'axios';
import React from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { BarChart, LineChart, PieChart, StackedBarChart } from 'react-native-chart-kit';
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

const PieChartCustom = ({ data }: Props) => {
	console.log(data);

	const colorList: string[] = [
		'#2085ec',
		'#72b4eb',
		'#0a417a',
		'#8464a0',
		'#cea9bc',
		'#323232',
		//
	];

	const formartDataPie = (value: ChartData): any[] => {
		const aux: any[] = [];
		const { labels, datasets } = value;
		labels.map((item, i) => {
			aux.push({
				name: labels[i],
				value: datasets[0].data[i],
				color: colorList[i],
				legendFontColor: '#7F7F7F',
				legendFontSize: 15,
			});
		});
		return aux;
	};
	console.log('aqui', formartDataPie(data));

	const data2 = [
		{
			name: 'Seoul',
			population: 21500000,
			color: 'rgba(131, 167, 234, 1)',
			// legendFontColor: '#7F7F7F',
			// legendFontSize: 15,
		},
	];
	return (
		<View style={styles.grafic}>
			<PieChart
				data={formartDataPie(data)}
				width={screenWidth}
				height={400}
				// fromZero={true}
				chartConfig={chartConfig}
				accessor={'value'}
				backgroundColor={'transparent'}
				// paddingLeft={'10'}
				center={[100, 0]}
				absolute
				// paddingLeft={`${screenWidth / 4}`}
				hasLegend={false}
				style={{
					// marginVertical: 8,
					borderRadius: 3,
					marginVertical: 6,
					borderWidth: 2,
				}}
			/>
			<FlatList
				data={formartDataPie(data)}
				renderItem={({ item }) => (
					<View
						style={[
							styles.listItem,
							{
								backgroundColor: item.color,
							},
						]}
					>
						<Text style={styles.textList}>{item.name}</Text>
					</View>
				)}
				// horizontal
				// pagingEnabled
				// snapToAlignment='center'
				// showsHorizontalScrollIndicator={false}
				// keyExtractor={(item) => item.id}
				// onScroll={handleOnScroll}
				// onViewableItemsChanged={handleOnViewableItemsChanged}
				// viewabilityConfig={viewabilityConfig}
			/>
		</View>
	);
};

export default PieChartCustom;
