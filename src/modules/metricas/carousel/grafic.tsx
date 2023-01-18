import React, { Component, FC, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { TouchableRipple } from 'react-native-paper';
import BarChartCustom from '../grafics/BarChart';
import LineChartCustom from '../grafics/PieChart';
import LineChartCurve from '../grafics/LineChartCurve';

//const bg = require('../../../../Images/fondoTranred.jpeg');

interface Props {
	data: ChartData;
	title: string;
}

const GraficCustom: FC<Props> = ({ data, title }) => {
	const formartData = (value: ChartData) => [
		{
			id: 1,
			component: <LineChartCurve data={value} />,
		},
		{
			id: 2,
			component: <BarChartCustom data={value} />,
		},
		{
			id: 3,
			component: <LineChartCustom data={value} />,
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
