import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import AppNavigator from './navigation/AppNavigator';
import {Colors} from './styles';

//console.disableYellowBox = true;

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
