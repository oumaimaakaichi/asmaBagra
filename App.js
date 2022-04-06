import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardScreen from './Screen/homme'
import OnBoardScreenL from './Screen/homme2';
import Login from './Screen/login';
const Stack= createStackNavigator();
export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoardScreen'>
        <Stack.Screen name='OnBoardScreen' component={OnBoardScreen}/>
        <Stack.Screen name='OnBoardScreenL' component={OnBoardScreenL}/>
      
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
