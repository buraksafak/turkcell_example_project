import { View, Text } from 'react-native'
import React from 'react'
import { IconButton } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/MaterialIcons'


const CustomGoBackIcon = () => {
    const navigation = useNavigation();

    const _goBack = () => {
        navigation.goBack()
    }
    return (
        <IconButton
            color='white'
            onPress={_goBack}
            icon={props => <Icon name="chevron-left" {...props} />}
        />
    )
}

export default CustomGoBackIcon