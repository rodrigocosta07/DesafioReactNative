import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
const Stack = createStackNavigator();
import Aulas from '../pages/Aulas';
import DrawerRoutes from './screens.rotas';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  DrawerActions } from '@react-navigation/native';


export default function Routes(props) {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#004897' },
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={DrawerRoutes}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 10}}>
              <FontAwesome name="bars"
                onPress={() => 
                  navigation.dispatch(DrawerActions.openDrawer())}
                color="#fff"
                size={32}
              />
            </TouchableOpacity>

          ),
        }}
      />
      <Stack.Screen
        name="Aulas"
        component={Aulas}
      />
    </Stack.Navigator >
  );
}
