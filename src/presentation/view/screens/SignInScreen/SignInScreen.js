import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ScrollViewBase, StatusBar, Touchable } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomLogo from '../../components/CustomLogo/CustomLogo';
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "@react-native-material/core";
import Snackbar from 'react-native-snackbar';

const user = {
  id: 0,
  userName: 'alicambaz',
  password: '123456'
}

//Login Screen
const SignInScreen = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  //sign in function (login button on press)
  function loginFunction() {
    setIsLoading(true);
    if (passwordIsNull() && userNameIsNull()) {
      Snackbar.show({
        text: 'Kullanıcı adı veya şifreniz boş olamaz!',
        duration: Snackbar.LENGTH_SHORT
      });
      setIsLoading(false);
    } else if (userNameIsTrue()) {
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("HomeScreen");
      }, 2000);

    } else {
      setIsLoading(false);
      Snackbar.show({
        text: 'Kullanıcı adı veya şifre yanlış!',
        duration: Snackbar.LENGTH_SHORT

      });
    }
  }
  //password null check -> (if it null, return false else return true)
  function passwordIsNull() {
    if (password == '') {
      return true;
    } else {
      return false;
    }
  }
  //user  null check -> (if it null, return false else return true)
  function userNameIsNull() {
    if (userName == '') {
      return true;
    } else {
      return false;
    }
  }
  //user name wrong check -> (if it wrong, return false else return true)
  function userNameIsTrue() {
    if (userName == user.userName) {
      return true;
    } else {
      return false;
    }
  }
  //password wrong check -> (if it wrong, return false else return true)
  function passwordIsTrue() {
    if (password == user.password) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.root}>
        <CustomLogo />
        <CustomInput
          icon="account"
          placeholder="Kullanıcı Adı"
          value={userName}
          setValue={setUsername}
          secureTextEntry={false} />

        <CustomInput
          icon="key"
          placeholder="Parola"
          value={password}
          setValue={setPassword}
          secureTextEntry={true} />
        {
          isLoading ? <ActivityIndicator size='large' color='#79b5e3' /> :
            <CustomButton
              buttonText={'Giriş Yap'}
              onPress={loginFunction} />
        }

        <Text
          style={styles.forgotPasswordText}>
          Şifremi Unuttum
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  logo: {
    minHeight: 180,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 300,
    width: '70%',
    height: 100,
    maxHeight: 200
  },
  textColumn: {
    alignItems: 'center',
    fontSize: 20
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10

  },
  forgotPasswordText: {
    fontSize: 18,
    fontWeight: 400
  }
})

export default SignInScreen