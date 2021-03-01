import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

import {Header} from '../components/Header';

const Start = createStackNavigator();
const Main = createStackNavigator();
const Root = createStackNavigator();

function StartStack() {
  return (
    <Start.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: (props) => <Header {...props} left />,
      }}>
      <Start.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Start.Screen name="SignUp" component={SignUp} />
    </Start.Navigator>
  );
}

function MainStack() {
  return (
    <Main.Navigator screenOptions={{headerShown: false}}>
      <Main.Screen name="Home" component={Home} />
    </Main.Navigator>
  );
}

export default function RootStack() {
  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      <Root.Screen name="Start" component={StartStack} />
      <Root.Screen name="Main" component={MainStack} />
    </Root.Navigator>
  );
}
