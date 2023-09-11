import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BarChart, LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar } from "@react-native-material/core";
import CustomGoBackIcon from '../../components/CustomIconButtons/CustomGoBackIcon';

const barData = [
  { value: 250, label: 'Pzt.' },
  { value: 500, label: 'Sal.', },
  { value: 745, label: 'Çrş.', frontColor: '#177AD5' },
  { value: 320, label: 'Perş.' },
  { value: 600, label: 'Cuma', },
  { value: 70, label: 'Cmt.' },
  { value: 85, label: 'Paz' },
];

const StatisticScreen = () => {
  return (
    <SafeAreaView>
      <AppBar
        leading={props => (
          <CustomGoBackIcon />
        )}
        title="İstatistikler"
        tintColor='white'
        centerTitle={true}
        color='#79b5e3' />
      <View style={{ alignItems: 'center', padding: 26, marginLeft:12 }}>
        <Text style={styles.textStyle}>
          Haftalık Hasta Kayıt Grafiği
        </Text>
        <BarChart
          isAnimated={true}
          style={styles.chartStyle}
          barWidth={21}
          noOfSections={3}
          barBorderRadius={8}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />

        <View style={{ marginTop: 50, alignItems: 'center', marginLeft: 20 }}>
          <LineChart
            spacing={45}
            barWidth={20}
            dataPointsColor1='blue'
            isAnimated={true}
            data={barData}
            yAxisThickness={0.2}
            xAxisThickness={0.2}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },

})

export default StatisticScreen

