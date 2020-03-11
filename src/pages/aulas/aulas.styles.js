import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 1
  },
  containerButtonAula: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  textDiaSemana: {
    textAlign: 'center',
    color: 'black',
    padding: 5
  },
  header: {
    height: 40,
    paddingTop: 5,
    backgroundColor: '#d2d1d1'
  },
  viewTextEscola: {
    backgroundColor: '#3d83be',
    maxHeight: 45,
    paddingTop: 5
  },
  textEscola: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 0
  },
  viewCard: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  cardContent: {
    width: '90%',
    height: '80%',
    position: 'relative',
    margin: 50,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden'
  },
  containerTextHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textHeder: {
    textAlign: "center", color: 'black'
  },
  containerAulas: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: '#004897',
    alignItems: 'center',
    padding: 10,
    width: 60,
    borderRadius: 5,
    margin: 5,
    height: 48
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    width: 'inherit',
    fontSize: 10
  },
  linhaDivisoria: {
    margin: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});