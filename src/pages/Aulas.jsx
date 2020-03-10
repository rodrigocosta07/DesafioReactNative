import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Content, Card, CardItem, Body, Right } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import db from '../../db.json';
const objAula = {
  id: null,
  horario: 1,
  siglaEscola: 'Horario Vago'
}
const objAulas = {
  segunda: {
    diaSemana: 1,
    manha: [],
    tarde: []
  },
  terca: {
    diaSemana: 2,
    manha: [],
    tarde: []
  },
  quarta: {
    diaSemana: 3,
    manha: [],
    tarde: []
  },
  quinta: {
    diaSemana: 4,
    manha: [],
    tarde: []
  },
  sexta: {
    diaSemana: 5,
    manha: [],
    tarde: []
  }
}
function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
export default class Aulas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aulas: objAulas
    };
  }

  getDataName(index) {
    var days = ['Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira'];
    return days[index]
  }

  getAulas(turno) {
    return turno.map(aula => {
      return <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'center',
        justifyContent: 'center'
      }}>
        <TouchableOpacity style={{
          backgroundColor: 'blue', width: 50, height: 40, flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
          minHeight: 20,
          borderRadius: 3
        }}>
          <Text style={{ color: 'white', textAlign: 'center' }}> {aula.siglaEscola} </Text>
        </TouchableOpacity>
      </View>
    })
  }

  getListTurno(list) {
    var turnos = groupBy(list, tur => tur.turno);
    var turnoManha = turnos.get('M');
    var turnotarde = turnos.get('V');
    console.log(turnoManha)
    console.log(turnotarde)
    if (turnoManha != undefined || turnotarde !== undefined) {
      return <View>
        {turnoManha !== undefined ? <Text style={{ textAlign: 'center', color: 'black', padding: 5 }} >
          {this.getDataName(list[0].diaSemana - 1)} -  {turnoManha[0].dataSemana} - Manhã
        </Text> : null}
        <View style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          alignContent: 'center',
          justifyContent: 'center'
        }}>
          {turnoManha !== undefined ? turnoManha.map(aula => {
            return <TouchableOpacity key={aula.id} style={{
              backgroundColor: 'blue', width: 50, height: 40, flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
              minHeight: 20,
              borderRadius: 3
            }}>
              <Text style={{ color: 'white', textAlign: 'center' }}> {aula.siglaEscola} </Text>
            </TouchableOpacity>
          }) : null}
        </View>
        {
          turnotarde !== undefined ? <Text style={{ textAlign: 'center', color: 'black', padding: 5 }} >
            {this.getDataName(list[0].diaSemana - 1)}  -  {turnotarde[0].dataSemana} - Tarde
        </Text> : null
        }
        <View style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
          {turnotarde !== undefined ? turnotarde.map(aula => {
            return <TouchableOpacity key={aula.id} style={{
              backgroundColor: 'blue', width: 50, height: 40, flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
              minHeight: 20,
              borderRadius: 3
            }}>
              <Text style={{ color: 'white', textAlign: 'center' }}> {aula.siglaEscola} </Text>
            </TouchableOpacity>
          }) : null}
        </View>
      </View >
    }
    return null
  }

  getAulas() {

  }
  componentDidMount() {
    const objAulas = this.state.aulas;
    db._embedded.aulas.forEach((item) => {
      switch (item.diaSemana) {
        case 1:
          if (item.turno == 'M') {
            objAulas.segunda.manha[item.horario] = item;
          } else {
            objAulas.segunda.tarde[item.horario] = item;
          }
          break;
        case 2:
          if (item.turno == 'M') {
            objAulas.terca.manha[item.horario] = item;
          } else {
            objAulas.terca.tarde[item.horario] = item;
          }
          break;
        case 3:
          if (item.turno == 'M') {
            objAulas.quarta.manha[item.horario] = item;
          } else {
            objAulas.quarta.tarde[item.horario] = item;
          }
          break;
        case 4:
          if (item.turno == 'M') {
            objAulas.quinta.manha[item.horario] = item;
          } else {
            objAulas.quinta.tarde[item.horario] = item;
          }
          break;
        case 5:
          if (item.turno == 'M') {
            objAulas.sexta.manha[item.horario] = item;
          } else {
            objAulas.sexta.tarde[item.horario] = item;
          }
          break;
      }
    });
    objAulas.forEach(x => {
      for(var i = 0; x.manha.length < 5 ; i++ ) {
        x.manha.push(objAula);
      }
      for(var i = 0; x.tarde.length < 5 ; i++ ) {
        x.tarde.push(objAula);
      }
    }) 
    console.log(objAulas);
    // const dataGroup = groupBy(db._embedded.aulas, aula => aula.dataSemana);
    // const res = [...dataGroup]
    // console.log(res.length)
    // this.setState({
    //   aulas: res
    // });

  }
  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#3d83be', maxHeight: 45, paddingTop: 5 }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>{db._embedded.aulas[0].escola}</Text>
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
        }}>
          <View style={{
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
          }} >
            <View style={{
              height: 40,
              paddingTop: 5,
              backgroundColor: '#d2d1d1'
            }}>
              <View style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text style={{ textAlign: "center", color: 'black' }}>{new Date(db.data).toLocaleDateString()}
                </Text>
                <FontAwesome name="calendar"
                  color="#000"
                  size={25}
                  style={{ marginHorizontal: 5, float: 'right' }}
                />
              </View>
            </View>
            <ScrollView >
              <Text style={{ textAlign: 'center', color: 'black', padding: 5 }} >
                Segunda feira -  10/03/2020 - Manha
            </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                alignContent: 'center',
                justifyContent: 'center',
                paddingHorizontal: 5,
              }}>
                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> Aula1 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> Aula2 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> Aula3 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> Aula4 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> aula5 </Text>
                </TouchableOpacity>
              </View>
              <Text style={{ textAlign: 'center', color: 'black', padding: 5 }} >
                Segunda feira -  10/03/2020 - tarde
            </Text>

              <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                alignContent: 'center',
                justifyContent: 'center',
                paddingHorizontal: 5,
              }}>
                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> Aula1 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> Aula2 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> Aula3 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> Aula4 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                      // marginTop: 0,
                      // alignItems: 'center'
                    }}> aula5 </Text>
                </TouchableOpacity>
              </View>

              <Text style={{ textAlign: 'center', color: 'black', padding: 5 }} >
                Segunda feira -  10/03/2020 - Noite
            </Text>

              <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                alignContent: 'center',
                justifyContent: 'center',
                paddingHorizontal: 5,
              }}>
                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit'
                    }}> Aula1 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                    }}> Aula2 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                    }}> Aula3 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  padding: 10,
                  width: 60,
                  borderRadius: 5,
                  margin: 5
                }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: 'inherit',
                    }}> Aula4 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button]}>
                  <Text
                    style={[styles.textButton]}> aula5 </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  margin: 20,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}







const styles = StyleSheet.create({
  containerButtonAula: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    width: 60,
    borderRadius: 5,
    margin: 5
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    width: 'inherit',
  },
})
