import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

function Home() {
	const [category, setCategory] = useState('');

	const appointments = [
		{
			id: '1',
			guild: {
				id: '1',
				name: 'Lendários',
				icon: null,
				owner: true,
			},
			category: '1',
			date: '26/06 ás 20:40h',
			description:
				'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
		},
		{
			id: '2',
			guild: {
				id: '1',
				name: 'Lendários',
				icon: null,
				owner: true,
			},
			category: '1',
			date: '26/06 ás 20:40h',
			description:
				'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
		},
	];

	const handleSelectCategory = (categoryId: string) => {
		categoryId === category ? setCategory('') : setCategory(categoryId);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Profile />
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
			/>
		</View>
	);
}

export { Home };
