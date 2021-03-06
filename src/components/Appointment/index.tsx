import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { GuildProps } from '../Guild';

import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type AppointmentProps = {
	id: string;
	guild: GuildProps;
	category: string;
	date: string;
	description: string;
};

type Props = RectButtonProps & {
	data: AppointmentProps;
};

function Appointment({ data, ...rest }: Props) {
	const [category] = categories.filter((item) => item.id === data.category);
	const { name, owner, icon } = data.guild;
	const { primary, on, secondary50, secondary70 } = theme.colors;

	return (
		<RectButton {...rest}>
			<View style={styles.container}>
				<LinearGradient
					colors={[secondary50, secondary70]}
					style={styles.guildIconContainer}>
					<GuildIcon />
				</LinearGradient>

				<View style={styles.content}>
					<View style={styles.header}>
						<Text style={styles.title}>{name}</Text>

						<Text style={styles.category}>{category.title}</Text>
					</View>

					<View style={styles.footer}>
						<View style={styles.dateInfo}>
							<CalendarSvg />

							<Text style={styles.date}>{data.date}</Text>
						</View>

						<View style={styles.playerInfo}>
							<PlayerSvg fill={owner ? primary : on} />

							<Text style={[styles.player, { color: owner ? primary : on }]}>
								{owner ? 'Anfitrião' : 'Visitante'}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</RectButton>
	);
}

export { Appointment, AppointmentProps };
