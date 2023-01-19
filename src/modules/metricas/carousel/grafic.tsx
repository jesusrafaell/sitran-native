import React, { Component, FC, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { TouchableRipple } from 'react-native-paper';
import BarChartCustom from '../grafics/BarChart';
import PieChartCustom from '../grafics/PieChart';
import LineChartCurve from '../grafics/LineChartCurve';
import { DataInt } from '../data';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';

//const bg = require('../../../../Images/fondoTranred.jpeg');

interface Props {
	data: DataInt[];
	title: string;
}

const GraficCustom: FC<Props> = ({ data, title }) => {
	const lineData = (data: DataInt[]): LineChartData => ({
		labels: data.map((item: DataInt) => item.name),
		datasets: [
			{
				data: data.map((item: DataInt) => item.population),
				color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
				strokeWidth: 2,
			},
		],
	});
	const formartData = (value: DataInt[]) => [
		{
			id: 1,
			component: <LineChartCurve data={lineData(value)} />,
		},
		{
			id: 2,
			component: <BarChartCustom data={lineData(value)} />,
		},
		{
			id: 3,
			component: <PieChartCustom data={value} />,
		},
	];

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				data={formartData(data)}
				renderItem={({ item }) => item.component}
				horizontal
				pagingEnabled
				snapToAlignment='center'
				showsHorizontalScrollIndicator={false}
				// keyExtractor={(item) => item.id}
				// onScroll={handleOnScroll}
				// onViewableItemsChanged={handleOnViewableItemsChanged}
				// viewabilityConfig={viewabilityConfig}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e2e2e',
		alignItems: 'center',
		// justifyContent: 'center',
		paddingTop: 50,
	},
	title: {
		fontSize: 15,
		color: '#000',
		fontWeight: 'bold',
		textTransform: 'none',
	},
});

export default GraficCustom;
