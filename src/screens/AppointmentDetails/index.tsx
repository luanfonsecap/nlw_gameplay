import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

import BannerImg from '../../assets/banner.png';

import { theme } from '../../global/styles/theme';
import { members } from '../../utils/mocks/members';
import { styles } from './styles';

function AppointmentDetails() {
	return (
		<View style={styles.container}>
			<Header
				title="Detalhes"
				action={
					<BorderlessButton>
						<Fontisto name="share" size={24} color={theme.colors.primary} />
					</BorderlessButton>
				}
			/>

			<ImageBackground source={BannerImg} style={styles.banner}>
				<View style={styles.bannerContent}>
					<Text style={styles.title}>Lendários</Text>

					<Text style={styles.subtitle}>
						É hoje que vamos chegar ao challenger sem perder uma partida da md10
					</Text>
				</View>
			</ImageBackground>

			<ListHeader title="Jogadores" subtitle="Total 3" />

			<FlatList
				data={members}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Member data={item} />}
				ItemSeparatorComponent={() => <ListDivider isCentered />}
				style={styles.members}
			/>

			<View style={styles.footer}>
				<ButtonIcon title="Entrar no servidor do Discord" />
			</View>
		</View>
	);
}

export { AppointmentDetails };
