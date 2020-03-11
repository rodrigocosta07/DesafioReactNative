import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Content, Card, CardItem, Body, Right } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import db from '../../db.json';
const objAula = {
  id: null,
  horario: Number,
  siglaEscola: 'HORÁRIO VAGO'
}
var
  days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
const obj = {
  dias: [{
    segunda: {
      diaSemana: 1,
      manha: [],
      tarde: []
    }
  }, {
    terca: {
      diaSemana: 2,
      manha: [],
      tarde: []
    }
  }, {
    quarta: {
      diaSemana: 3,
      manha: [],
      tarde: []
    }
  },
  {
    quinta: {
      diaSemana: 4,
      manha: [],
      tarde: []
    }
  },
  {
    sexta: {
      diaSemana: 5,
      manha: [],
      tarde: []
    }
  }
  ]
}
const objAulass = {
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
      aulas: obj
    };
  }
  getDataName(index) {
    var days = ['Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira'];
    return days[index]
  }
  getData(index) {
    const data = new Date(db.data);
    const day = data.getDate();
    data.setDate(day + index)
    return data.toLocaleDateString();
  }

  componentDidMount() {
    const objAulas = this.state.aulas;
    var valor = 1;
    days.forEach((x, index) => {
      for (var i = 0; i <= 4; i++) {
        const aula = objAula;
        aula.horario = valor;
        objAulas.dias[index][x].manha.push(aula);
        objAulas.dias[index][x].tarde.push(aula);
        valor++;
        if (valor === 5) {
          valor = 1
        }
      }
    });
    db._embedded.aulas.forEach((item) => {
      switch (item.diaSemana) {
        case 1:
          if (item.turno == 'M') {
            objAulas.dias[0].segunda.manha[item.horario - 1] = item;
          } else {
            objAulas.dias[0].segunda.tarde[item.horario - 1] = item;
          }
          break;
        case 2:
          if (item.turno == 'M') {
            objAulas.dias[1].terca.manha[item.horario - 1] = item;
          } else {
            objAulas.dias[1].terca.tarde[item.horario - 1] = item;
          }
          break;
        case 3:
          if (item.turno == 'M') {
            objAulas.dias[2].quarta.manha[item.horario - 1] = item;
          } else {
            objAulas.dias[2].quarta.tarde[item.horario - 1] = item;
          }
          break;
        case 4:
          if (item.turno == 'M') {
            objAulas.dias[3].quinta.manha[item.horario - 1] = item;
          } else {
            objAulas.dias[3].quinta.tarde[item.horario - 1] = item;
          }
          break;
        case 5:
          if (item.turno == 'M') {
            objAulas.dias[4].sexta.manha[item.horario - 1] = item;
          } else {
            objAulas.dias[4].sexta.tarde[item.horario - 1] = item;
          }
          break;
      }
    });
    objAulas.dias.map((item, i) => {
      item[days[i]].manha.map((x, i) => {
        if (x.id !== null) {
          return x.horario = i + 1;
        }
      })
      return item[days[i]].tarde.map((x, i) => {
        if (x.id === null) {
          return x.horario = i + 1;
        }
      })
    });
    this.setState({
      aulas: objAulas
    });
  }

  render() {
    return (
      <View style={{ flex: 1, marginVertical: 1 }}>
        <View style={{ backgroundColor: '#3d83be', maxHeight: 45, paddingTop: 5 }}>
          <Text style={{ textAlign: 'center', color: 'white', marginBottom: 0 }}>{db._embedded.aulas[0].escola}</Text>
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
                  style={{ marginHorizontal: 5 }}
                />
              </View>
            </View>
            <ScrollView >
              {this.state.aulas.dias.map((dia, i) => {
                return <View key={i}>
                  <Text style={[styles.textDiaSemana]} >
                    {this.getDataName(dia[days[i]].diaSemana - 1)} -  {this.getData(i)} - Manha
                  </Text>
                  <View key={i + Math.floor(Math.random() * 1000)} style={[styles.containerAulas]}>
                    {dia[days[i]].manha.map((m) => {
                      return <TouchableOpacity key={i + Math.floor(Math.random() * 1000)}
                        style={[styles.button, { backgroundColor: m.id === null ? '#616161' : '#004897' }]}>
                        <Text
                          style={[styles.textButton]}> {m.siglaEscola} </Text>
                      </TouchableOpacity>
                    })}
                  </View>
                  <Text key={i + Math.floor(Math.random() * 1000)} style={[styles.textDiaSemana]} >
                    {this.getDataName(dia[days[i]].diaSemana - 1)} -  {this.getData(i)} - tarde
                  </Text>
                  <View key={i + Math.floor(Math.random() * 1000)} style={[styles.containerAulas]}>
                    {dia[days[i]].tarde.map((t) => {
                      return <TouchableOpacity key={i + Math.floor(Math.random() * 1000)}
                        style={[styles.button, { backgroundColor: t.id === null ? '#616161' : '#004897' }]}>
                        <Text
                          style={[styles.textButton]}> {t.siglaEscola} </Text>
                      </TouchableOpacity>
                    })}
                  </View>
                  <View
                    style={[styles.linhaDivisoria]}
                  />
                </View>
              })}
            </ScrollView>
          </View>
        </View>
      </View >
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
  textDiaSemana: {
    textAlign: 'center',
    color: 'black',
    padding: 5
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
    margin: 5
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    width: 'inherit',
  },
  linhaDivisoria: {
    margin: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
})
