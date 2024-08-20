import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({});

export function FontProvider({ children }) {
  const [loaded, error] = useFonts({
    fonte1: require("../../assets/fonts/fonte1.ttf"),
  });

  if (!loaded && !error) {
    return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontFamily:"fonte1", fontSize:20, marginTop:15}}>Carregando as Fontes</Text>
        <ActivityIndicator size="large" color="0000ff"/>
    </View>
    );
  }

  return <FontContext.Provider value={{}}>{children}</FontContext.Provider>;
}
export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("UseFont must be used within a FontProvider");
  }
  return context;
}
