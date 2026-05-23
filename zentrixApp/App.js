import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';

import { Comeco } from './src/screens/Comeco';
import { Login } from './src/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts ({ Itim_400Regular });

  if (!fontsLoaded) {
    return null;
  }

   return (
    <AppContent />
  );
}

function AppContent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 1000,
        }}
      > 

        <Stack.Screen name="Splash" component={Comeco} />
        <Stack.Screen name="Comeco" component={Comeco} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
  );
}