import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { styles } from './styles';

function Profile() {
	const { user } = useAuth();

	return (
		<View style={styles.container}>
			<Avatar urlAvatar={user.avatar} />

			<View style={styles.info}>
				<View style={styles.user}>
					<Text style={styles.greeting}>Olá,</Text>
					<Text style={styles.username}>{user.firstName}</Text>
				</View>
				<View>
					<Text style={styles.message}>Hoje é dia de vitória</Text>
				</View>
			</View>
		</View>
	);
}

export { Profile };
