import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Inicial from '../pages/Inicial';
import MyPets from '../pages/MyPets';

const { Navigator, Screen } = createBottomTabNavigator();

function Tab() {
  return (
    <Navigator
    tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="Inicial"
        component={Inicial}
        options={{
          tabBarLabel: 'Pets',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon name="github" size={size} color={focused ? '#235cba' : color} />
            );
          }
        }}
      />
      <Screen
        name="MyPets"
        component={MyPets}
        options={{
          tabBarLabel: 'Meus pets',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon name="align-justify" size={size} color={focused ? '#235cba' : color} />
            );
          }
        }}
      />
    </Navigator>
  )
}

export default Tab;