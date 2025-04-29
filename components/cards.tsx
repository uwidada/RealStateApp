import images from '../constants/images';
import icons from '../constants/icons'
import React from 'react';
import {View,Text, TouchableOpacity, Image } from 'react-native'

interface props{
    onPress?:() => void;
}

export const FeaturedCards = ({onPress}:props) => {
  return (
    <View>
     <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
        <Image source={images.japan} className='size-full  rounded-2xl'/>
        <Image  source={images.cardGradient} className='size-full  rounded-2xl absolute  bottom-0'/>
        <View className='flex flex-row items-center bg-white/90 px-3py-1.5 rounded-full absolute top-5 right-5'>
            <Image source={icons.star} className='size-3.5'/>
            <Text className='text-xs font-rubik-bold text-blue-300 ml-1'>4.4</Text>
        </View>
        <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
<Text className='text-xl font-rubik-extrabold text-white' numberOfLines={1}>Morden Appartment</Text>
<Text className=' text-base font-rubik text-white'> 22 w 15th St,New York</Text>

        </View>
        <View className='flex flex-row  items-center justify-between w-full'>
            <Text className='text-xl font-rubik-extrabold text-white'>
                  $2,500
            </Text>
            <Image
            source={icons.heart} className='size-5'/>
        </View>

     </TouchableOpacity>
    </View>
  );
};


export const Card = () => {
    return (
      <View>
        <Text> Cards</Text>
      </View>
    );
  };
  
