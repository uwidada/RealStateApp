import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Explore = () => {
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView  
      showsVerticalScrollIndicator= {false}
      contentContainerClassName='pb-32 px-7'>
      <Text>explore</Text>
      </ScrollView>
          
       </SafeAreaView>
  );
};

export default Explore;