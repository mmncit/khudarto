import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 8,
  },
  image: {
    height: 20 * 4,
    width: 20 * 4,
    borderRadius: 4,
  },
  title: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    color: 'white',
    fontWeight: '700',
  },
});
