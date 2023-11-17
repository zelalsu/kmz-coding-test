// App.js
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/store';
import {AuthProvider} from './src/store/AuthContext';
export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}
