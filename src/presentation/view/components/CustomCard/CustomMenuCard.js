import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomMenuCard = ({ title, onPress, source }) => {
  const [imagePath, setImagePath] = useState('../../../../../assets/images/patient_icon.png');
  useEffect(() => {
    setImagePath(source);
  }, [source]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image resizeMode='contain' style={styles.logo} source={(imagePath)} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 110,
    alignContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
  },
  logo: {
    minHeight: 50,
    maxWidth: 50,
    width: 50,
    height: 50,
    maxHeight: 50
  }
});

export default CustomMenuCard;