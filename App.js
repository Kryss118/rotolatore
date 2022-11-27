import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import RotolaScreen from './src/screens/RotolaScreen';
import GruppoScreen from './src/screens/GruppoScreen';
import ScegliScreen from './src/screens/ScegliScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Rotolatore">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
          name="Details" 
          component={DetailScreen}
          options={({route}) => ({title: route.params.title})}
          />
      <Stack.Screen name="Rotola" component={RotolaScreen} options={({route})=>({title: route.params.title})} />
      <Stack.Screen name="Scegli" component={ScegliScreen} />
      <Stack.Screen name="Gruppo" component={GruppoScreen} />
    </Stack.Navigator>
  </NavigationContainer>  
  );
}

const styles = StyleSheet.create({

});
