import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

export interface DataInt {
	name: string;
	population: number;
	color: string;
	legendFontColor: string;
	legendFontSize: number;
}

const data: { grafico: { name: string; data: DataInt[] } }[] = [
	{
		grafico: {
			name: 'Pos transando',
			data: [
				{
					name: 'Milpagos',
					population: 215,
					color: 'rgba(131, 167, 234, 1)',
					legendFontColor: '#7F7F7F',
					legendFontSize: 15,
				},
				{
					name: 'Carropago',
					population: 258,
					color: '#F00',
					legendFontColor: '#7F7F7F',
					legendFontSize: 15,
				},
				{
					name: 'Librepago',
					population: 535,
					color: 'red',
					legendFontColor: '#7F7F7F',
					legendFontSize: 15,
				},
				{
					name: 'BVC',
					population: 658,
					color: '#ffa600',
					legendFontColor: '#7F7F7F',
					legendFontSize: 15,
				},
			],
		},
	},
	{
		grafico: {
			name: 'Si/No',
			data: [
				{
					name: 'Si',
					population: 215,
					color: 'rgba(131, 167, 234, 1)',
					legendFontColor: '#7F7F7F',
					legendFontSize: 15,
				},
				{
					name: 'No',
					population: 258,
					color: '#F00',
					legendFontColor: '#7F7F7F',
					legendFontSize: 15,
				},
			],
		},
	},
];

export default data;
