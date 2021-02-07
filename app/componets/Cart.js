import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Cart = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Cart</Text>
      </View>
   )
}

export default Cart

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f5fe'
   },
   text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#3c1c70'
   }
})
