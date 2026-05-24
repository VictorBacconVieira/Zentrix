import { useEffect } from 'react';
import { View, Image } from 'react-native';

export function Comeco({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation) {
        navigation.replace('Login');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center">
      
      <Image 
        source={require('../../assets/images/icon-logo.png')} 
        className="w-[100%]"
        resizeMode="contain"
      />

    </View>
  );
}