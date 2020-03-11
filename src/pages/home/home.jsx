import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './home.styles';
import { FontAwesome } from '@expo/vector-icons';
export default function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    console.log(navigation.setOptions)
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <FontAwesome name="bars"
            // onPress={() => 
            //   navigation.dispatch(DrawerActions.openDrawer())}
            color="#fff"
            size={32}
          />
        </TouchableOpacity>

      ),
    });
  }, [navigation]);
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