import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  image: {
    height: 224,
    width: '100%',
    backgroundColor: 'rgb(243, 244, 246)',
  },
  arrowLeftIconContainer: {
    position: 'absolute',
    top: 56,
    left: 20,
    padding: 8,
    backgroundColor: 'rgb(243, 244, 246)',
    borderRadius: 9999,
  },
  restaurantContainer: {
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  restaurantChildContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
  },
  restaurantDescriptionContainer: {
    flexDirection: 'row',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 4,
    marginBottom: 4,
  },
  restaurantPanelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 4,
  },
  textStyle: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgb(107, 114, 128)',
  },
  ratingFontColor: {
    color: 'rgb(34, 197, 94)',
  },
  shortDescription: {
    color: 'rgb(107, 114, 128)',
    marginTop: 8,
    paddingBottom: 16,
  },
  foodAllergyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgb(209, 213, 219)',
  },
  foodAllergyText: {
    paddingLeft: 8,
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
  },
  menuTitle: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    marginBottom: 12,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
  },
});
