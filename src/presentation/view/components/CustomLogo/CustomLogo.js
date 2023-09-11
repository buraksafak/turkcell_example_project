import {Image, StyleSheet} from 'react-native'
import React from 'react'

const CustomLogo = () => {
var imagePath = '../../../../../assets/images/turkcell_logo.png';
  return (
    <Image resizeMode='contain' style={styles.logo}  source={require(imagePath)}/>
  )
}

const styles = StyleSheet.create({
    logo: {
      minHeight:180,
      marginTop:20,
      marginBottom:20,
      maxWidth: 300,
      width: '70%',
      height: 100,
      maxHeight: 200
    }
  })

export default CustomLogo