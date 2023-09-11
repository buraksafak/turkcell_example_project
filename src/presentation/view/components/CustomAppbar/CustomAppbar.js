import { View, Text } from 'react-native'
import React from 'react'

const CustomAppbar = ({title1}) => {
    return (
        <AppBar
            title={title1}
            tintColor='white'
            centerTitle={true}
            color='#79b5e3' />
    )
}

export default CustomAppbar