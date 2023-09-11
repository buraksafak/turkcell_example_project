import { View, StyleSheet, Keyboard, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AppBar, ActivityIndicator } from "@react-native-material/core";
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomGoBackIcon from '../../components/CustomIconButtons/CustomGoBackIcon';
import DatePicker from 'react-native-date-picker'
import ImagePath from '../../../../../assets/images/patient_icon.png';
import Snackbar from 'react-native-snackbar';


const PatientRecordScreen = () => {
  var now = new window.Date();;
  const [idNumber, setIdNumber] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [birthdate, setbirthdate] = useState(now);
  const [selectedBirthdate, setSelectedDate] = useState('');
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  
  const patientRecordOnPress = () => {
    if (checkFatherName() && checkBirthdate() && checkIdNumber()) {
      setIsLoading(true);
      setTimeout(() => {
        Snackbar.show({
          text: 'Kayıt başarıyla eklendi.',
          duration: Snackbar.LENGTH_SHORT
        });
        setIsLoading(false);
        setFatherName('');
        setSelectedDate('');
        setIdNumber('');
      }, 2000);
  

    } else {
      Snackbar.show({
        text: 'Lütfen zorunlu alanları boş bırakmayınız.',
        duration: Snackbar.LENGTH_SHORT
      });
  
    }
  }

  //if father name is null or empty -> return FALSE, else -> return TRUE
  function checkFatherName() {
    if (fatherName.length == 0 || fatherName == "") {
      return false;
    } else {
      return true;
    }

  }

  //if id number is null or empty -> return FALSE, else -> return TRUE
  function checkIdNumber() {
    if (idNumber.length == 0 || idNumber == "") {
      return false;
    } else {
      return true;
    }

  }

  //if birthdate is null or empty -> return FALSE, else -> return TRUE
  function checkBirthdate() {
    if (birthdate.length == 0 || birthdate == "") {
      return false;
    } else {
      return true;
    }

  }

  const showDateTimePicker = () => {
    Keyboard.dismiss();
    setOpen(true);
  }

  const setBirthday = (currentDate) => {
    setSelectedDate(currentDate.toLocaleDateString('tr-TR'));
    setOpen(false)
  }
  return (
    <View style={styles.root}>
      <AppBar
        leading={props => (
          <CustomGoBackIcon />
        )}
        title="Hasta Kayıt"
        tintColor='white'
        centerTitle={true}
        color='#79b5e3' />
      <ScrollView>
        <View style={styles.body}>
          <Image resizeMode='contain' style={styles.image} source={(ImagePath)} />
          <CustomInput
            icon="format-list-bulleted"
            placeholder="Kimlik/Pasaport Numarası"
            value={idNumber}
            setValue={setIdNumber}
            secureTextEntry={false} />

          <CustomInput
            icon="account"
            placeholder="Baba Adı"
            value={fatherName}
            setValue={setFatherName}
            secureTextEntry={false} />

          <Pressable style={styles.press}
            onPress={showDateTimePicker}>
            <CustomInput
              editable={false}
              icon="calendar-edit"
              placeholder="Doğum Tarihi"
              value={selectedBirthdate}
              setValue={setbirthdate}
              secureTextEntry={false} />
          </Pressable>

          <DatePicker
            title="Tarih Seçin"
            maximumDate={now}
            mode='date'
            locale='tr-TR'
            modal
            open={open}
            date={birthdate}
            onConfirm={(date) => {
              setBirthday(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
{
          isLoading ? <ActivityIndicator size='large' color='#79b5e3' /> :
          <CustomButton
            buttonText={'Kaydet'}
            onPress={patientRecordOnPress} /> }
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    padding: 20,
    alignItems: 'center'
  },
  root: {
    // alignItems: 'center',
  },
  image: {
    // minHeight: 150,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 300,
    width: '70%',
    height: 130,
    // maxHeight: 200
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
  },
  press: {
    width: '100%'
  }
})

export default PatientRecordScreen