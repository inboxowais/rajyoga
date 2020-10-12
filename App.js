import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import configureStore from './configureStore';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native';
import HomePage from './home';
import {createStackNavigator} from '@react-navigation/stack';
import RajyogaCoueseList from './screens/rajyoga.course.list.item/index';
const initialState = {};
const store = configureStore(initialState);
const Stack = createStackNavigator();
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
