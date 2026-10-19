import { StyleSheet } from 'react-native';
import { commonStyles, FONT_WEIGHT_BOLD } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 18,
    lineHeight: 28,
  },
  descriptionText: {
    ...commonStyles.textSm,
    color: 'rgb(107, 114, 128)',
    paddingLeft: 16,
    paddingRight: 16,
  },
  scrollViewContainer: {
    paddingTop: 16,
  },
});
