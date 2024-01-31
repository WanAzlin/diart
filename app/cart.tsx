import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const cart = () => {
  return (
    <View>
      <View style={styles.boxOrder}>

      </View>
    </View>
  )
}

export default cart

const styles = StyleSheet.create({
    boxOrder:{
        backgroundColor: '#E2E2E2',
        height: 65,
        width: 400,
        marginLeft: 10,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: "row",
      
      },
})