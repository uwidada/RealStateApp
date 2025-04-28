import images from '../../../constants/images';
import icons from '../../../constants/icons';
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { settings } from '../../../constants/data';
import { useGlobalContext } from '../../../lib/global-provider';
import { logout } from '../../../lib/appwrite';

interface SettingsProps {
  icon: ImageSourcePropType,
  title: string,
  onPress?: () => void,
  textStyle?: string,
  showArrow?: boolean
}
const Profile = () => {
  const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsProps) => (
    <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between py-3'>
      <View className='flex flex-row items-center gap-3'>
        <Image className='size-6'
          source={icon} />
        <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className='size-5' />}
    </TouchableOpacity>
  )

  const {user,refetch} = useGlobalContext();
  
  const handleLogout = async() => {
     const result = await logout();

     if(result){
      Alert.alert("success", "you have been logged out")
      refetch();
     }else{
      Alert.alert("Error", "An error occured while logging out" )
     }
  }
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-32 px-7'>
        <View className='flex flex-row items-center justify-between mt-5'>
          <Text className='text-lg font-rubik-bold'>profile</Text>
          <Image
            source={icons.bell} className='size-5'
          />
        </View>
        <View className='flex-row justify-center flex- mt-5'>
          <View className='flex flex-col items-center relative mt-5 '>

          
            <Image
              source={{ uri: user?.avatar }} className='h-40 w-40 relative rounded-full' />
            <TouchableOpacity className='absolute bottom-11 right-2'>
              <Image
                source={icons.edit} className='size-9'
              />

            </TouchableOpacity>
            <Text className='text-lg font-rubik-bold mt-2'>{user?.name}</Text>
          </View>
        </View>
        <View className='flex flex-col mt-10'>
          <SettingsItem icon={icons.calendar} title={'My Bokkings'} />
          <SettingsItem icon={icons.wallet} title={'Payments'} />

        </View>
        <View className='flex flesx-col mt-5 border-t pt-5 border-primary-200'>
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}

        </View>
        <View className='flex flex-col mt-5 border-t pt-5 border-primary-500'>
             <SettingsItem icon={icons.logout} title='Logout' textStyle='text-danger' showArrow={false} onPress={handleLogout}/>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default Profile;