import { StyleSheet } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 40,
    marginBottom: 42,
  },
  matches: {    
    marginTop: 24,
    marginLeft: 26
  },

  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginRight: 20,
    marginBottom: getBottomSpace(),
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18
  },
});