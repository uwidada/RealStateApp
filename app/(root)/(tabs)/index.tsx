import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10 text-red-500">WELCOME TO ReState </Text>
      <Link href="/sign-in">
        <Text className="text-blue-600">Sign-In</Text>
      </Link>
      <Link href="/explore"> Explore </Link>
      <Link href="/profile"> Profile </Link>
      <Link href="/properties/1"> Property </Link>
    </View>
  );
}
