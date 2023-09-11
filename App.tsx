import React from 'react';
import type {PropsWithChildren} from 'react';
import { store } from './store'
import { Provider } from 'react-redux'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './src/presentation/view/screens/SignInScreen/SignInScreen';
import HomeScreen from './src/presentation/view/screens/HomeScreen/HomeScreen';
import ReportScreen from './src/presentation/view/screens/ReportScreen/ReportScreen';
import PatientQueryScreen from './src/presentation/view/screens/PatientQueryScreen/PatientQueryScreen';
import StatisticScreen from './src/presentation/view/screens/StatisticScreen/StatisticScreen';
import ServiceAddScreen from './src/presentation/view/screens/ServiceAddScreen/ServiceAddScreen';
import PatientRecordScreen from './src/presentation/view/screens/PatientRecordScreen/PatientRecordScreen';

import { StyleSheet} from 'react-native';
const Stack = createNativeStackNavigator();
type SectionProps = PropsWithChildren<{
  title: string;
}>;
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ReportScreen"
            component={ReportScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="PatientQueryScreen"
            component={PatientQueryScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="StatisticScreen"
            component={StatisticScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ServiceAddScreen"
            component={ServiceAddScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="PatientRecordScreen"
            component={PatientRecordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
