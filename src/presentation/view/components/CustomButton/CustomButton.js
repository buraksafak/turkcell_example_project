import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, buttonText }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{buttonText}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#79b5e3',
        width:'100%',
        padding:15,
        marginVertical: 8,
        alignItems:'center',
        borderRadius:15,

    },
    text: {
        fontWeight:'bold',
        color:'white'
    }
})

export default CustomButton