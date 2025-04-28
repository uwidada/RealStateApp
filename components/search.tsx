import { router, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import icons from '../constants/icons';

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query || '');

  const debounceSearchCallback = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500); 

  const handleSearch = (text: string) => {
    setSearch(text);
    debounceSearchCallback(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-100 mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-start mr-2">
        <Image source={icons.search} className="size-5" />
        <TextInput
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
          placeholder="Search"
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
