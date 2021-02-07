import React, { useState } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import Tab from './Tab'

const { width } = Dimensions.get('screen')

const TabBar = ({ state, navigation }) => {
   const [selected, setSelected] = useState('Home')
   const { routes } = state
   const renderColor = (currentTab) => (currentTab === selected) ? '#3c1c70' : '#5203d1'
   const handlePress = (activeTab, index) => {
      if (state.index !== index) {
         setSelected(activeTab)
         navigation.navigate(activeTab)
      }
   }

   return (
      <View style={styles.wrapper}>
         <View style={styles.container}>
            {
               routes.map((route, index) =>
                  <Tab tab={route}
                     icon={route.params.icon}
                     onPress={() => handlePress(route.name, index)}
                     color={renderColor(route.name)}
                     key={route.key}
                  />)
            }
         </View>
      </View>
   )
}

export default TabBar


const styles = StyleSheet.create({
   wrapper: {
      position: 'absolute',
      bottom: 20,
      width,
      alignItems: 'center',
      justifyContent: 'center',
   },
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderWidth: 0.4,
      // marginHorizontal: 24,
      borderColor: '#cdcdcd',
      borderRadius: 100,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.58,
      shadowRadius: 3,

      elevation: 6,
   }
})
