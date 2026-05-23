import { Text, View } from "react-native";

export function Login(){
    return(
        // flex-1: ocupa a tela toda | items-center e justify-center: centraliza no meio da tela
        <View className="flex-1 items-center justify-center bg-zinc-900">
            {/* Usando a sua fonte timBold que você configurou! */}
            <Text className="text-white text-3xl font-timBold">
                oiiiiiii
            </Text>
        </View>
    )
}