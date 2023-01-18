import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

const data: { id: number; data: ChartData; name: string }[] = [
	{
		id: 1,
		data: {
			labels: ['carropago', 'librepago', 'milpagos', 'bvc', 'plaza', 'bnc'],
			datasets: [
				{
					data: [20000, 60000, 140000, 1000, 2000, 15000],
					color: (opacity = 1) => `rgba(55, 35, 106, ${opacity})`, // optional
					strokeWidth: 4, // optional
				},
			],
		},
		name: 'Cantidad de POS Transando',
	},
	{
		id: 2,
		data: {
			labels: ['SI', 'No'],
			datasets: [
				{
					data: [1000, 500],
					color: (opacity = 1) => `rgba(55, 35, 106, ${opacity})`, // optional
					strokeWidth: 4, // optional
				},
			],
		},
		name: 'Prueba Si/no',
	},
	{
		id: 3,
		data: {
			labels: ['Tranred', 'Milpagos', 'Nasis'],
			datasets: [
				{
					data: [1000, 500, 4000],
					color: (opacity = 1) => `rgba(55, 35, 106, ${opacity})`, // optional
					strokeWidth: 4, // optional
				},
			],
		},
		name: 'Prueba #3',
	},
];

export default data;
