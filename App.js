import React from 'react'
// import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './app/navigation/TabNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}
