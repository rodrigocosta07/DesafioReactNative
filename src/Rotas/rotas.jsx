import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Aulas from '../pages/Aulas/Aulas';
import DrawerRoutes from './screens.rotas';
const Stack = createStackNavigator();
export default function Routes() {
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
      />
      <Stack.Screen
        name="Aulas"
        component={Aulas}
      />
    </Stack.Navigator >
  );
}
