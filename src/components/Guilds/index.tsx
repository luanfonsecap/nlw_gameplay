import React from 'react';
import { View, FlatList } from 'react-native';

import { guilds } from '../../utils/mocks/guilds';

import { Guild } from '../Guild';
import { ListDivider } from '../ListDivider';

import { styles } from './styles';

function Guilds() {
	return (
		<View style={styles.container}>
			<FlatList
				data={guilds}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Guild data={item} />}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <ListDivider />}
				style={styles.guilds}
			/>
		</View>
	);
}

export { Guilds };
