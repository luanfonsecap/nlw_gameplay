import React from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  urlAvatar: string;
};

function Avatar({ urlAvatar }: Props) {
  const { secondary40, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary40, secondary70]}
    >
      <View>
        <Image style={styles.avatar} source={{ uri: urlAvatar }} />
      </View>
    </LinearGradient>
  );
}

export { Avatar };
