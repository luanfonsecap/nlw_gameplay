import React, { useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../../screens/Guilds';
import { GuildProps } from '../../components/Guild';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

function AppointmentCreate() {
	const [category, setCategory] = useState('');
	const [openModalGuilds, setOpenModalGuilds] = useState(false);
	const [selectedGuild, setSelectedGuild] = useState<GuildProps>(
		{} as GuildProps,
	);

	const handleOpenModalGuilds = () => {
		setOpenModalGuilds(true);
	};

	const handleCloseModalGuilds = () => {
		setOpenModalGuilds(false);
	};

	const handleSelectGuild = (guildSelected: GuildProps) => {
		setSelectedGuild(guildSelected);
		setOpenModalGuilds(false);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<ScrollView>
				<Header title="Agendar partida" />

				<Text
					style={[
						styles.label,
						{ marginLeft: 24, marginTop: 36, marginBottom: 18 },
					]}>
					Categoria
				</Text>

				<CategorySelect
					hasCheckBox
					setCategory={setCategory}
					categorySelected={category}
				/>

				<View style={styles.form}>
					<RectButton onPress={handleOpenModalGuilds}>
						<View style={styles.select}>
							{selectedGuild.icon ? (
								<View style={styles.image} />
							) : (
								<GuildIcon />
							)}

							<View style={styles.selectBody}>
								<Text style={styles.label}>
									{selectedGuild.name
										? selectedGuild.name
										: 'Selecione um servidor'}
								</Text>
							</View>

							<Feather
								name="chevron-right"
								color={theme.colors.heading}
								size={18}
							/>
						</View>
					</RectButton>

					<View style={styles.field}>
						<View>
							<Text style={styles.label}>Dia e mês</Text>

							<View style={styles.column}>
								<SmallInput maxLength={2} />
								<Text style={styles.divider}>/</Text>
								<SmallInput maxLength={2} />
							</View>
						</View>

						<View>
							<Text style={styles.label}>Hora e minuto</Text>

							<View style={styles.column}>
								<SmallInput maxLength={2} />
								<Text style={styles.divider}>:</Text>
								<SmallInput maxLength={2} />
							</View>
						</View>
					</View>

					<View style={[styles.field, { marginBottom: 12 }]}>
						<Text style={styles.label}>Descrição</Text>

						<Text style={styles.charactersLimit}>Max 100 caracteres</Text>
					</View>

					<TextArea
						multiline
						maxLength={100}
						numberOfLines={5}
						autoCorrect={false}
					/>

					<View style={styles.footer}>
						<Button title="Agendar" />
					</View>
				</View>
			</ScrollView>

			<ModalView visible={openModalGuilds} closeModal={handleCloseModalGuilds}>
				<Guilds handleSelectGuild={handleSelectGuild} />
			</ModalView>
		</KeyboardAvoidingView>
	);
}

export { AppointmentCreate };
