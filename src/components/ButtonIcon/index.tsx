import { Text, View, TouchableOpacity,
     Image, TouchableOpacityProps } from "react-native";

import DiscordImg from '../../assets/discord.png'
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: String;
}

export default function ButtonIcon({title, ...rest} : Props) {
    return (
        <TouchableOpacity 
        style={styles.container}
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}