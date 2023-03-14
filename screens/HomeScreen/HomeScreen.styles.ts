import { StyleSheet } from 'react-native';

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
    color: '#9CA38F',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
  },
  currentLocation: {
    fontWeight: '700',
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
