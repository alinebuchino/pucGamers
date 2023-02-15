import { ActivityIndicator, View } from "react-native";
import { theme } from "../../global/styles/theme";

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090A' }}>
      <ActivityIndicator color={theme.colors.primary}/>
    </View>
  )
}