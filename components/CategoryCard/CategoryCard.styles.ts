import { StyleSheet } from 'react-native';
import { FONT_WEIGHT_BOLD, SPACING } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 2 * SPACING,
  },
  image: {
    height: 20 * SPACING,
    width: 20 * SPACING,
    borderRadius: SPACING,
  },
  title: {
    position: 'absolute',
    bottom: SPACING,
    left: SPACING,
    color: 'white',
    fontWeight: FONT_WEIGHT_BOLD,
  },
});
