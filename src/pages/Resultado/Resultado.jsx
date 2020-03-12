import React from 'react';
import { View, Text, Linking, Button } from 'react-native';

export default class Resultado extends React.Component {
  openLinking() {
    Linking.openURL('https://api.whatsapp.com/send?phone=+5571993075814');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Oi.. E ai Gostaram do resultado ?</Text>
        <Text>De qualquer forma me manda um feedback!</Text>
        <Button
          onPress={this.openLinking} title="Enviar resposta pelo whatsapp" />
      </View >
    );
  }
}
