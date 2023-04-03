import { StyleSheet } from 'react-native';
import { commonStyles } from '../../common';
export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    zIndex: 50,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#00CCBB',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCountText: {
    ...commonStyles.basketFontStyle,
    backgroundColor: '#01A296',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 8,
    paddingBottom: 8,
  },
  viewBasketText: {
    ...commonStyles.basketFontStyle,
    textAlign: 'center',
  },
  currencyText: {
    ...commonStyles.basketFontStyle,
  },
});
