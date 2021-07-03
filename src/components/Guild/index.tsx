import React from 'react';
import {
	TouchableOpacity,
	TouchableOpacityProps,
	View,
	Text,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type GuildProps = {
	id: string;
	name: string;
	icon: null | string;
	owner: boolean;
};

type Props = TouchableOpacityProps & {
	data: GuildProps;
};

function Guild({ data, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
			<GuildIcon />

			<View style={styles.content}>
				<View>
					<Text style={styles.title}>{data.name}</Text>

					<Text style={styles.type}>
						{data.owner ? 'Adiministrador' : 'Convidado'}
					</Text>
				</View>
			</View>

			<Feather name="chevron-right" color={theme.colors.heading} size={24} />
		</TouchableOpacity>
	);
}

export { Guild, GuildProps };
