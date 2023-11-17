// navigation/CategoryStack.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoryListScreen from '../screens/CategoryListScreen';
import SubCategoryListScreen from '../screens/SubCategoryListScreen';
import CartScreen from '../screens/CartScreen';
import {DrawerStackParams, RootStackParams} from './types';
// import DrawerContent from '../components/UI/DrawerContent';
import LoginScreen from '../screens/LoginScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {window} from '../constants/dimensions';
import DrawerContent from '../components/Drawer/DrawerContent';

const Stack = createNativeStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator<DrawerStackParams>();

const Navigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
    }}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="MainNavigator" component={MainNavigator} />
    <Stack.Screen
      name="SubCategoryListScreen"
      component={SubCategoryListScreen}
    />
    <Stack.Screen name="CartScreen" component={CartScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CategoryListScreen"
      screenOptions={{
        drawerStyle: {
          width: window.width - 100,
          backgroundColor: 'transparent',
        },
        headerTitle: '',
        drawerType: 'front',
      }}
      drawerContent={props => DrawerContent(props)}>
      <Drawer.Screen name="CategoryListScreen" component={CategoryListScreen} />
    </Drawer.Navigator>
  );
};

export default Navigation;
