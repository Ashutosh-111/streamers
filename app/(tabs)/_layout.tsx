import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = (props: any) => {
  if (props.focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[100px] min-h-12 mt-5 ml-2 min-h-[55px] justify-center items-center rounded-full overflow-hidden'
      >
        <Image source={props.icon} tintColor='#151312' className='size-5' />
        <Text className='text-secondary text-base font-semibold ml-2'>
          {props.name}
        </Text>
      </ImageBackground>
    )
  } else {
    return ( // <== 👈 THIS was missing!
      <View className='size-full justify-center items-center mt-4 rounded-full'>
        <Image source={props.icon} tintColor='#A8B5DB' />
      </View>
    )
  }
}

const abc = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 0,
          borderColor: '#0f0D23',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'HOME',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name='Home' icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          headerShown: false,
          title: 'SAVE',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name='Save' icon={icons.save} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          headerShown: false,
          title: 'SEARCH',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name='Search' icon={icons.search} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: 'PROFILE',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name='Profile' icon={icons.person} />
          ),
        }}
      />
    </Tabs>
  )
}

export default abc