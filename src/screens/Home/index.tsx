import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';

import { appointments } from '../../utils/mocks/appointments';

import { styles } from './styles';

function Home() {
	const [category, setCategory] = useState('');
	const navigation = useNavigation();

	const handleSelectCategory = (categoryId: string) => {
		categoryId === category ? setCategory('') : setCategory(categoryId);
	};

	const handleAppointmentCreate = () => {
		navigation.navigate('AppointmentCreate');
	};

	return (
		<Background>
			<View style={styles.container}>
				<View style={styles.header}>
					<Profile />
					<ButtonAdd onPress={handleAppointmentCreate} />
				</View>

				<CategorySelect
					categorySelected={category}
					setCategory={handleSelectCategory}
				/>

				<View style={styles.content}>
					<ListHeader title="Partidas agendadas" subtitle="Total 6" />
				</View>

				<FlatList
					data={appointments}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <Appointment data={item} />}
					showsHorizontalScrollIndicator={false}
					style={styles.matches}
					ItemSeparatorComponent={() => <ListDivider />}
					contentContainerStyle={{ paddingBottom: 30 }}
				/>
			</View>
		</Background>
	);
}

export { Home };
