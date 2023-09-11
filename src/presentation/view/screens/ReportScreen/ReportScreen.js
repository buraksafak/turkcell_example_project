import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import { AppBar } from "@react-native-material/core";
import { useSelector, useDispatch } from 'react-redux';
import CustomGoBackIcon from '../../components/CustomIconButtons/CustomGoBackIcon';
import CustomInput from '../../components/CustomInput/CustomInput';
import IconIon from 'react-native-vector-icons/Ionicons'
import IconEntypo from 'react-native-vector-icons/Entypo'

//get screen size
const { width, height } = Dimensions.get('screen');
const SPACING = 20;
const ICON_SIZE = 30;

const ReportScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [reportList, setReportList] = useState([]);

  const dispatch = useDispatch();
  const report = useSelector((state) => state.report.report);

  //listen report list (for component state)
  useEffect(() => {
    const clonedReport = [...report];
    setReportList(clonedReport);
  }, [report])

  //search function
  useEffect(() => {
    if (searchText.length === 0) {
      const clonedReport = [...report];
      setReportList(clonedReport);
    } else {
      const clonedReportList = [...reportList];
      const unitList = []
      clonedReportList.forEach((report) => {
        const unit = report.unit.toLowerCase();
        if (unit.includes(searchText.toLowerCase())) {
          unitList.push(report)
        }
      })
      setReportList(unitList);
    }
  }, [searchText])


  return (
    <View>
      <AppBar
        leading={props => (
          <CustomGoBackIcon {...props} />
        )}
        title="Radyoloji Raporları"
        tintColor='white'
        centerTitle={true}
        color='#79b5e3' />
      <View style={{ paddingLeft: 15, paddingRight: 15 }}>
        <CustomInput
          style={{ paddingLeft: 15, paddingRight: 15, }}
          setValue={setSearchText}
          value={searchText}
          editable={true}
          icon={'text-search'}
          placeholder={'Rapor Ara'}
          secureTextEntry={false} />
        {reportList && reportList.length > 0 &&
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 70 }}
            style={{ marginBottom: 200 }}
            scrollEnabled={true}
            data={reportList}
            keyExtractor={item => {
              console.log('keyextactyor', item)
              return item.id
            }}
            renderItem={({ item, index }) => {
              return <View style={{ flexDirection: 'row', padding: 10, marginBottom: 15, backgroundColor: 'white', borderRadius: 15, elevation: 3 }}>
                <IconIon
                  color='#79b5e3'
                  name={'document-text-outline'}
                  size={32}
                  style={{ width: ICON_SIZE, height: ICON_SIZE, borderRadius: ICON_SIZE, marginRight: SPACING / 2 }}
                />
                <View>
                  <Text style={styles.largeText}>
                    {item.unit}
                  </Text>

                  <View style={styles.subTitleRow}>
                    <IconEntypo
                      name={'chevron-right'}
                      color='#517fa4'
                    />
                    <Text>
                      {item.detail}
                    </Text>

                  </View>
                  <View style={styles.subTitleRow}>
                    <IconEntypo
                      name={'chevron-right'}
                      color='#517fa4'
                    />
                    <Text>
                      {item.date}
                    </Text>

                  </View>
                  <View style={styles.subTitleRow}>

                  </View>
                </View>
              </View>

            }}
          />}
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 6
  },
  subTitleRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  page: {
    padding: 10,
  },
  smallText: {
    fontSize: 16, fontWeight: '400'
  },
  mediumText: {
    fontSize: 16, fontWeight: '500'
  },
  largeText: {
    fontSize: 16, fontWeight: '700'
  },
  button: {
    paddingBottom: 70,
    position: 'absolute'
  }
})

export default ReportScreen