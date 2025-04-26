import { Stack } from "expo-router";
import { runOnJS } from "react-native-reanimated";
import "./globals.css"

export default function RootLayout(){
  return <Stack screenOptions={{headerShown:false}}/>;
}