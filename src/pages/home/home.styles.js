import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 1
  },
  cardContent: {
    width: '90%',
    height: '30%',
    position: 'relative',
    margin: 50,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#004897',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    justifyContent: 'center'
  },
  viewCard: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
});