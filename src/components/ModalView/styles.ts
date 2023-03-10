import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  background: {
    flex: 1,
    backgroundColor: theme.colors.secondary100,
  },
  bar: {
    width: 40,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.heading,
    alignSelf: "center",
    marginTop: 12,
  },
});