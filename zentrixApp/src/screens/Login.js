import { KeyboardAvoidingView, Text, View, ScrollView, Image, Platform, TouchableOpacity, Alert } from "react-native";
import { Input } from '../components/input';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GoogleLogoIcon } from "phosphor-react-native";


export function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
    if (email === "admin@teste.com" && senha === "1234") {
      navigation.navigate('Home');
    } else {
      Alert.alert("Acesso Negado", "Email ou senha incorretos.");
    }
  }

    return(
        // flex-1: ocupa a tela toda | items-center e justify-center: centraliza no meio da tela
        <View className="flex-1 items-center justify-center bg-fundo">
            <KeyboardAvoidingView
            className="flex-1"
              behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            >
                 <ScrollView contentContainerStyle={{ padding: 5, alignItems:'center', }} className='flex'>
                  <Image
                      source={require("../../assets/images/icon-logo.png")}
                      className="w-[350px] mt-[-200px]"
                      resizeMode="contain"
                  />
                 

                  <View className='w-[350px] mt-[-250px] items-center'>

                    <Text className="font-timSemibold text-[22px] text-secundaria mt-[-10px] ">
                        Faça login para acessar sua conta
                    </Text>
                    
                      <Input 
                          texto={'Email'} 
                          value={email}
                          onChangeText={(text) => setEmail(text.toLowerCase())}
                          keyboardType="email-address"
                      />
                      
                      <Input 
                          texto={'Senha'} 
                          seguranca={true}
                          onChangeText={setSenha}
                          value={senha}
                      />
                  </View>

                  <View className='w-[95%]'>
                      <Text className="font-timLight text-[13px] text-principal mt-[-5%] mb-[10%]"
                      onPress={() => navigation.navigate('EsqueciSenha')}>
                      Esqueci minha senha
                      </Text>
                  </View>

                  <TouchableOpacity 
                      className="px-20 bg-detalhe w-[95%] rounded-[15px] items-center justify-center mt-2 py-2"
                      onPress={handleLogin}
                      activeOpacity={0.8}
                  >
                      <Text className="text-principal font-timRegular text-[18px]">
                      Entrar
                      </Text>
                  </TouchableOpacity>
                  
                  <View className='flex-row items-center mt-[10%] gap-3'>
                      <View className='h-[1px] w-[15%] bg-preto'/>
                      <Text className='font-timLight text-preto'>ou</Text>
                      <View className='h-[1px] w-[15%] bg-preto' />
                  </View>

                  <TouchableOpacity
                      className='flex-row justify-center border bg-transparent rounded-xl gap-2 p-1 mt-[10%] border-preto dark:border-branco'
                  >
                      <GoogleLogoIcon weight="regular" size={25} color="#000" />
                      <Text className='font-popRegular text-[18px] text-preto dark:text-branco'>Acesse pelo Google</Text>
                  </TouchableOpacity>

                  <Text className='font-popLight text-[13px] mt-[15%] text-preto dark:text-branco' onPress={() => navigation.navigate('Cadastro')}>
                      Faça o cadastro clicando <Text className='text-amarelo' onPress={() => navigation.navigate('Cadastro')}>aqui</Text>
                  </Text>
              </ScrollView>
            {/* Usando a sua fonte timBold que você configurou! */}
            </KeyboardAvoidingView>
        </View>
    )
}