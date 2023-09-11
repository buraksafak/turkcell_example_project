import { View, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, textType, icon, editable, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
      style = {styles.input}
        onChange={onChange}
        label={placeholder}
        editable={editable}
        textContentType={textType}
        leading={<Icon
          color='#79b5e3'
          name={icon}
          size={26} />}
        textAlign='left'
        variant=""
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={setValue}
        setValue={setValue}
      >
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    width: '100%',
    borderColor: '#D6C8C1',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 6,
    marginVertical: 8,
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

})

export default CustomInput