import { StyleSheet } from 'react-native';

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
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 28,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgb(107, 114, 128)',
    paddingLeft: 16,
    paddingRight: 16,
  },
  scrollViewContainer: {
    paddingTop: 16,
  },
});
