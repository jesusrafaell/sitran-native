import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { TouchableRipple } from 'react-native-paper';
import data from '../data';
import BarChartCustom from '../grafics/BarChart';
import LineChartCustom from '../grafics/PieChart';
import LineChartCurve from '../grafics/LineChartCurve';
import GraficCustom from './grafic';

//const bg = require('../../../../Images/fondoTranred.jpeg');

const Carousel = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<View style={styles.containerGrafic}>
						<GraficCustom data={item.data} title={item.name} />
					</View>
				)}
				// horizontal
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
		flex: 1,
	},
	containerGrafic: {
		// paddingTop: 70,
		height: Dimensions.get('window').height,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Carousel;
