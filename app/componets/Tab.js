import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = ({ color, tab, icon, onPress }) => {

   return (
      <TouchableOpacity style={styles.container} onPress={onPress} >
         {icon && <FontAwesome5 name={icon} size={25} color={color} />}
         <Text style={{ color }}>{tab.name}</Text>
      </TouchableOpacity>
   )
}

export default Tab

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 15
   }
})
