import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ScrollViewBase, FlatList, BackHandler } from 'react-native'
import React, { useState, NativeEventSubscription } from 'react'
import CustomMenuCard from '../../components/CustomCard/CustomMenuCard';
import { AppBar } from "@react-native-material/core";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import addPatientImagePath from '../../../../../assets/images/patient_icon.png';
import addServiceImagePath from '../../../../../assets/images/add_patient.png';
import reportImagePath from '../../../../../assets/images/report.png';
import searchImagePath from '../../../../../assets/images/search.png';
import statisticImagePath from '../../../../../assets/images/statistic1.png';
import communicationImagePath from '../../../../../assets/images/communication1.png';
import Snackbar from 'react-native-snackbar';


const HomeScreen = () => {
  const navigation = useNavigation();
  const patientSaveOnPress = () => {
    navigation.navigate("PatientRecordScreen");
  };
  const addServiceOnPress = () => {
    navigation.navigate("ServiceAddScreen");

  };
  const reportOnPress = () => {
    navigation.navigate("ReportScreen");

  };
  const queryOnPress = () => {
    Snackbar.show({
      text: 'YAPIM AŞAMASINDA.',
      duration: Snackbar.LENGTH_SHORT
    });

  };
  const statisticOnPress = () => {
    navigation.navigate("StatisticScreen");
  };
  const testOnPress = () => {
    Snackbar.show({
      text: 'YAPIM AŞAMASINDA.',
      duration: Snackbar.LENGTH_SHORT
    });
  };

  return (
    <SafeAreaView>
      <AppBar
        title="Ana Sayfa"
        tintColor='white'
        centerTitle={true}
        color='#79b5e3' />
      <View style={styles.page}>
        <View style={styles.root}>
          <CustomMenuCard
            source={addPatientImagePath}
            title={"Hasta Kayıt"}
            onPress={patientSaveOnPress} />
          <CustomMenuCard
            source={addServiceImagePath}
            title={"Hizmet Ekle"}
            onPress={addServiceOnPress} />
          <CustomMenuCard
            source={reportImagePath}
            title={"Rapor"}
            onPress={reportOnPress} />
        </View>
        <View style={styles.root}>
          <CustomMenuCard
            source={searchImagePath}
            title={"Sorgu"}
            onPress={queryOnPress} />
          <CustomMenuCard
            source={statisticImagePath}
            title={"İstatistik"}
            onPress={statisticOnPress} />
          <CustomMenuCard
            source={communicationImagePath}
            title={"İletişim"}
            onPress={testOnPress} />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 6
  },
  page: {
    padding: 6,
    marginTop: 15

  }


})

export default HomeScreen
