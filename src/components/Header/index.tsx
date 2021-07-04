import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
	title: string;
	action?: ReactNode;
};

function Header({ title, action }: Props) {
	const { secondary100, secondary40, heading } = theme.colors;

	const navigation = useNavigation();

	const handleGoBack = () => {
		navigation.goBack();
	};

	return (
		<LinearGradient colors={[secondary100, secondary40]}>
			<View style={styles.container}>
				<BorderlessButton onPress={handleGoBack}>
					<Feather name="arrow-left" size={24} color={heading} />
				</BorderlessButton>

				<Text style={styles.title}>{title}</Text>

				{action ? <View>{action}</View> : <View style={{ width: 24 }} />}
			</View>
		</LinearGradient>
	);
}

export { Header };
