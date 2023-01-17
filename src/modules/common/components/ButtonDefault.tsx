import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { palette } from '../styles/palette';

interface ButtonProps {
	text: string;
	onPress: () => void;
	height?: number;
	width?: number;
	textAlign?: 'string';
	fontSize?: number;
	flex?: number;
	loading?: boolean;
	disabled?: boolean;
	customTextStyle?: TextStyle;
	marginTop?: boolean;
	marginBottom?: boolean;
	marginLeft?: number;
	marginRight?: number;
	marginRigh?: number;
	paddingLeft?: number;
	fontWeight?: string;
	borderRadius?: number;
	justifyContent?: string;
	typeButton?: string;
	extraStyles?: TextStyle;
}

const ButtonDefault = ({
	text,
	onPress,
	height,
	width,
	textAlign,
	fontSize,
	flex,
	loading,
	disabled,
	customTextStyle,
	marginTop,
	marginBottom,
	marginLeft = 0,
	marginRight = 0,
	paddingLeft = 0,
	fontWeight = 'bold',
	justifyContent = 'center',
	extraStyles,
	typeButton = 'primary',
}: ButtonProps) => {
	return (
		<TouchableRipple
			disabled={disabled || loading}
			style={[
				{
					alignItems: 'center',
				},
				extraStyles,
				// @ts-ignore
				styles[`btn_${typeButton}`],
			]}
			onPress={onPress}
		>
			<>
				<Text
					style={[
						// @ts-ignore
						styles[`text_${typeButton}`],
						customTextStyle,
					]}
				>
					{text}
				</Text>
			</>
		</TouchableRipple>
	);
};

const styles = StyleSheet.create({
	btn_disabled: {
		backgroundColor: palette.blackDisabled,
	},
	text_disabled: {
		color: palette.blackDisabled,
	},
	btn_primary: {
		backgroundColor: palette.primary,
		padding: 10,
	},
	text_primary: {
		color: palette.white,
	},
	btn_inline: {
		backgroundColor: palette.white,
		borderWidth: 1,
		borderColor: palette.primary,
	},
	text_inline: {
		color: palette.primary,
	},
	btn_inline_red: {
		borderColor: palette.red,
		borderWidth: 1,
	},
	text_inline_red: {
		color: palette.red,
	},
	btn_outline_success: {
		borderColor: palette.primary,
		borderWidth: 1,
	},
	text_outline_success: {
		color: palette.primary,
	},
});

export default ButtonDefault;
