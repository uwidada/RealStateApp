import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from "../assets/images";
import icons from "../assets/images"

const SignIn = () => {

  const handleLogin = () => { };
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6 ' resizeMode="contain" />
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200 '>Welcome To ReState</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'> Let's Get You Closer To {"\n"}
            <Text className='text-blue-500'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to Restate with Google</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className='flex flex-row items-center justify-center'>
              <Image
                source={icons.google}
                className='w-5 h-5'
                resizeMode='contain'
              />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
                Contiue With Google
              </Text>
            </View>



          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;