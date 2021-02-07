import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from '../componets/TabBar'
import Message from '../componets/Message'
import Cart from '../componets/Cart'
import Home from '../componets/Home'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
   return <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name='Home' component={Home} initialParams={{ icon: 'home' }} />
      <Tab.Screen name='Message' component={Message} initialParams={{ icon: 'envelope' }} />
      <Tab.Screen name='Cart' component={Cart} initialParams={{ icon: 'cart-plus' }} />
   </Tab.Navigator>
}

export default TabNavigation

// const styles = StyleSheet.create({})
