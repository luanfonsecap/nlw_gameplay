import React from 'react';
import { View, Image, Text } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { styles } from './styles';

function SignIn() {
	return (
		<Background>
			<View style={styles.container}>
				<Image
					source={IllustrationImg}
					style={styles.image}
					resizeMode="stretch"
				/>

				<View style={styles.content}>
					<Text style={styles.title}>
						Conecte-se {'\n'}e organize suas jogatinas
					</Text>

					<Text style={styles.subtitle}>
						Crie grupos para jogar seus games {`\n`}
						favoritos com seus amigos
					</Text>

					<ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
				</View>
			</View>
		</Background>
	);
}

export { SignIn };
