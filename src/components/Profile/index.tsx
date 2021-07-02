import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../Avatar';
import { styles } from './styles';

function Profile() {
	return (
		<View style={styles.container}>
			<Avatar urlAvatar="https://www.github.com/luanfonsecap.png" />

			<View style={styles.info}>
				<View style={styles.user}>
					<Text style={styles.greeting}>Olá,</Text>
					<Text style={styles.username}>Luan</Text>
				</View>
				<View>
					<Text style={styles.message}>Hoje é dia de vitória</Text>
				</View>
			</View>
		</View>
	);
}

export { Profile };
