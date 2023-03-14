import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 1px 3px 0 rgb(0, 0, 0 / 0.1), 0 1px 2px -1px rgb(0, 0, 0 / 0.1)',
  },
  image: {
    height: 36 * 4,
    width: 64 * 4,
    borderRadius: 2,
  },
  info: {
    paddingLeft: 12,
    paddingBottom: 16,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 28,
    paddingTop: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgb(107, 114, 128)',
  },
  ratingColor: {
    color: 'green',
  },
});
