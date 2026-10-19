import { StyleSheet } from 'react-native';
import { commonStyles, FONT_WEIGHT_BOLD } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 12,
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 8,
  },
  image: {
    height: 7 * 4,
    width: 7 * 4,
    backgroundColor: 'rgb(209, 213, 219)',
    borderRadius: 9999,
  },
  headerContainer: {
    paddingLeft: 4,
    flex: 1,
  },
  deliveryText: {
    ...commonStyles.textSm,
    color: '#9CA38F',
    fontWeight: FONT_WEIGHT_BOLD,
  },
  currentLocation: {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 20,
    lineHeight: 28,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    marginLeft: 16,
    marginRight: 8,
  },
  magnifyingGlassContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgb(229, 231, 235)',
    padding: 12,
  },
  textInput: {
    flexGrow: 1,
    color: 'gray',
  },
  featuredRowContainer: {
    backgroundColor: 'rgb(243, 244, 246)',
  },
});
