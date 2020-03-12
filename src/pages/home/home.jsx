import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './home.styles';
import { FontAwesome } from '@expo/vector-icons';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    console.log(navigation)
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={[styles.cardContent]} >
          <Text style={{ color: 'white', textAlign: 'center', }}>Olá seja bem vindo!</Text>
        </View>
        <Button
          title="Ir para tela de aulas"
          onPress={() => navigation.navigate('Aulas')}
        />
      </View>
    );
  }
}