import { Stack } from "expo-router";
import { runOnJS } from "react-native-reanimated";
import "./globals.css"
import GlobalProvider from "./lib/global-provider";

export default function RootLayout(){

  return (
  <GlobalProvider>
<Stack screenOptions={{headerShown:false}}/>
  </GlobalProvider>
  );

}