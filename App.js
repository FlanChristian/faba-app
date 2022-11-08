import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import Details from './src/component/Details';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen
} from './src/screens'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};

