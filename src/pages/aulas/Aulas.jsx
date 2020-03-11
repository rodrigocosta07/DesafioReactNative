import React from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './aulas.styles';
import db from '../../../db.json';
const objAula = {
  id: null,
  horario: Number,
  siglaEscola: 'HORÁRIO VAGO'
}
var days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
const obj = {
  dias: [{
    segunda: {
      diaSemana: 1,
      manha: [],
      tarde: [],
      noite: [],
    }
  }, {
    terca: {
      diaSemana: 2,
      manha: [],
      tarde: [],
      noite: [],
    }
  }, {
    quarta: {
      diaSemana: 3,
      manha: [],
      tarde: [],
      noite: [],
    }
  },
  {
    quinta: {
      diaSemana: 4,
      manha: [],
      tarde: [],
      noite: [],
    }
  },
  {
    sexta: {
      diaSemana: 5,
      manha: [],
      tarde: [],
      noite: [],
    }
  }
  ]
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
    days.forEach((x, index) => {
      for (var i = 0; i <= 4; i++) {
        const aula = objAula;
        aula.horario = i;
        objAulas.dias[index][x].manha.push(aula);
        objAulas.dias[index][x].tarde.push(aula);
        objAulas.dias[index][x].noite.push(aula);
      }
    });
    db._embedded.aulas.forEach((item) => {
      switch (item.diaSemana) {
        case 1:
          if (item.turno == 'M') {
            objAulas.dias[0].segunda.manha[item.horario - 1] = item;
          } else if (item.turno == 'V') {
            objAulas.dias[0].segunda.tarde[item.horario - 1] = item;
          } else {
            objAulas.dias[0].segunda.noite[item.horario - 1] = item;
          }
          break;
        case 2:
          if (item.turno == 'M') {
            objAulas.dias[1].terca.manha[item.horario - 1] = item;
          } else if (item.turno == 'V') {
            objAulas.dias[1].terca.tarde[item.horario - 1] = item;
          } else {
            objAulas.dias[1].terca.noite[item.horario - 1] = item;
          }
          break;
        case 3:
          if (item.turno == 'M') {
            objAulas.dias[2].quarta.manha[item.horario - 1] = item;
          } else if (item.turno == 'V') {
            objAulas.dias[2].quarta.tarde[item.horario - 1] = item;
          } else {
            objAulas.dias[2].quarta.noite[item.horario - 1] = item;
          }
          break;
        case 4:
          if (item.turno == 'M') {
            objAulas.dias[3].quinta.manha[item.horario - 1] = item;
          } else if (item.turno == 'V') {
            objAulas.dias[3].quinta.tarde[item.horario - 1] = item;
          } else {
            objAulas.dias[3].quinta.noite[item.horario - 1] = item;
          }
          break;
        case 5:
          if (item.turno == 'M') {
            objAulas.dias[4].sexta.manha[item.horario - 1] = item;
          } else if (item.turno == 'V') {
            objAulas.dias[4].sexta.tarde[item.horario - 1] = item;
          } else {
            objAulas.dias[4].sexta.noite[item.horario - 1] = item;
          }
          break;
      }
    });
    this.setState({
      aulas: objAulas
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.viewTextEscola}>
          <Text style={[styles.textEscola]}>{db._embedded.aulas[0].escola}</Text>
        </View>
        <View style={[styles.viewCard]}>
          <View style={[styles.cardContent]} >
            <View style={[styles.header]}>
              <View style={[styles.containerTextHeader]}>
                <Text style={[styles.textHeder]}>{new Date(db.data).toLocaleDateString()}
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
                return <View key={i + 'viewManha'}>
                  <Text style={[styles.textDiaSemana]} >
                    {this.getDataName(dia[days[i]].diaSemana - 1)} -  {this.getData(i)} - Manhã
                  </Text>
                  <View style={[styles.containerAulas]}>
                    {dia[days[i]].manha.map((m, indexManha) => {
                      return <TouchableOpacity key={indexManha + 'manha'} disabled={m.id === null}
                        style={[styles.button, { backgroundColor: m.id === null ? '#616161' : '#004897' }]}>
                        <Text
                          style={[styles.textButton]}> {m.siglaEscola} </Text>
                      </TouchableOpacity>
                    })}
                  </View>
                  <Text key={i + 'viewTarde'} style={[styles.textDiaSemana]} >
                    {this.getDataName(dia[days[i]].diaSemana - 1)} -  {this.getData(i)} - Tarde
                  </Text>
                  <View  style={[styles.containerAulas]}>
                    {dia[days[i]].tarde.map((t, indexTarde) => {
                      return <TouchableOpacity key={indexTarde + 'tarde'} disabled={t.id === null}
                        style={[styles.button, { backgroundColor: t.id === null ? '#616161' : '#004897' }]}>
                        <Text
                          style={[styles.textButton]}> {t.siglaEscola} </Text>
                      </TouchableOpacity>
                    })}
                  </View>
                  <Text key={i + 'viewNoite'} style={[styles.textDiaSemana]} >
                    {this.getDataName(dia[days[i]].diaSemana - 1)} -  {this.getData(i)} - Noite
                  </Text>
                  <View  style={[styles.containerAulas]}>
                    {dia[days[i]].noite.map((n, indexNoite) => {
                      console.log(indexNoite)                      
                      return <TouchableOpacity key={indexNoite + 'noite'} disabled={n.id === null}
                        style={[styles.button, { backgroundColor: n.id === null ? '#616161' : '#004897' }]}>
                        <Text
                          style={[styles.textButton]}> {n.siglaEscola} </Text>
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