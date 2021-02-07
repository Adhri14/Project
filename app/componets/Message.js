import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Message = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Profile</Text>
      </View>
   )
}

export default Message

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f7f5fe'
   },
   text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#3c1c70'
   }
})
