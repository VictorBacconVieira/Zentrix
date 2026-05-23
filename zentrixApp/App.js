import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { useFonts,
   Itim_200ExtraLight,
    Itim_300Light, Itim_400Regular, 
    Itim_500Medium, Itim_600SemiBold,
    Itim_700Bold } from '@expo-google-fonts/itim';

import { Comeco } from './src/screens/Comeco';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Itim_200ExtraLight,
    Itim_300Light,
    Itim_400Regular,
    Itim_500Medium,
    Itim_600SemiBold,
    Itim_700Bold,
  });

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

        <Stack.Screen name="Comeco" component={Comeco} />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
  );
}