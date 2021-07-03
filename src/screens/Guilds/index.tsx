import React from 'react';
import { View, FlatList } from 'react-native';

import { guilds } from '../../utils/mocks/guilds';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
	handleSelectGuild: (guild: GuildProps) => void;
};

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
