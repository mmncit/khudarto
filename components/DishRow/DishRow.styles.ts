import { StyleSheet } from 'react-native';

const color = 'rgb(156, 163, 175)';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 16,
    borderColor: 'rgb(229, 231, 235)',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  leftContainer: {
    width: '80%',
  },
  name: {
    marginBottom: 4,
    fontSize: 18,
    lineHeight: 28,
  },
  textColor: {
    color: 'rgb(156, 163, 175)',
  },
  currency: {
    color: 'rgb(156, 163, 175)',
    marginTop: 8,
  },
  image: {
    height: 20 * 4,
    width: 20 * 4,
    backgroundColor: 'rgb(209, 213, 219)',
    padding: 16,
    borderWidth: 1,
    borderColor: '#F3F3F4',
  },
  orderCountContainer: {
    backgroundColor: 'white',
    paddingRight: 16,
  },
  orderCount: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    margin: 4,
  },
});
