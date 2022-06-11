import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './screens/Landing';

export default function App() {
  return (
    <NavigationContainer>
      <Landing/>
    </NavigationContainer>
  );
}