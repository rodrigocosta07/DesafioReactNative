import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from '../pages/home/home';
import Detalhes from '../pages/Detalhes';
const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#004897'
      }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white'
      }}
      >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Detalhes" component={Detalhes} />
    </Drawer.Navigator>
  );
}

