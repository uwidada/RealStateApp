import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert } from 'react-native';
import images from "../../../constants/images";
import icons from "../../../constants/icons";
import Search from "../../../components/search";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between">
          {/* Left side: avatar and text */}
          <View className="flex flex-row items-center">
            <Image
              source={images.avatar}
              className="size-12 rounded-full"
            />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-sx font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Adrian
              </Text>
            </View>
          </View>
          <Image
            source={icons.bell}
            className="size-6"
          />
        </View>
        <Search  />
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg font-rubik-bold text-black-300">
            Features
          </Text>
          <TouchableOpacity>
            <Text className=" text-base font-rubik-bold text-blue-700"> See All </Text>
          </TouchableOpacity>

        </View>

      </View>
      </View>
      
    </SafeAreaView>

  );
}
