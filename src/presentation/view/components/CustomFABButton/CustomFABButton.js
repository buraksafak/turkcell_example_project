import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'


const CustomFAB = () => {
  return (
      <TouchableOpacity style = {styles.circle}>
        <Icon name = 'add-outline' size = {25} />
      </TouchableOpacity>
  )
}
export default CustomFAB

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom:10,
    right: 40,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center'
  }
}
)
