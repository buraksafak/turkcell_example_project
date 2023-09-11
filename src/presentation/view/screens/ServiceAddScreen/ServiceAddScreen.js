import { Text, View, StyleSheet, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'
import { AppBar } from "@react-native-material/core";
import CustomGoBackIcon from '../../components/CustomIconButtons/CustomGoBackIcon';
import IconIon from 'react-native-vector-icons/Ionicons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import CustomInput from '../../components/CustomInput/CustomInput';
import Snackbar from 'react-native-snackbar';


const SPACING = 20;
const ICON_SIZE = 30;


const ServiceAddScreen = () => {

  const [selectedIdList, setSelectedIdList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [serviceList, setServiceList] = useState([]);

  const dispatch = useDispatch();
  const service = useSelector((state) => state.service.service);

  //listen service list (for component state)
  useEffect(() => {
    const clonedService = [...service];
    setServiceList(clonedService);
  }, [service])

  //if tap on the card, add item in the selected list
  function onTapCard(id) {
    const clonedSelectedIdList = [...selectedIdList];
    if (!clonedSelectedIdList.includes(id)) {
      clonedSelectedIdList.push(id)
    } else {
      const index = clonedSelectedIdList.findIndex((el) => el === id);
      clonedSelectedIdList.splice(index, 1);
    }
    setSelectedIdList([...clonedSelectedIdList]);
  }

  //
  function addServiceButtonTap() {
    Snackbar.show({
      text: 'Seçilen hizmetler başarıyla eklendi',
      duration: Snackbar.LENGTH_SHORT
    });
    setSelectedIdList([]);
    setSearchText('');
  }

  //search function
  useEffect(() => {
    if (searchText.length === 0) {
      const clonedService = [...service];
      setServiceList(clonedService);
    } else {
      const clonedServiceList = [...serviceList];
      const titleList = []
      clonedServiceList.forEach((service) => {
        const title = service.title.toLowerCase();
        if (title.includes(searchText.toLowerCase())) {
          titleList.push(service)
        }
      })
      setServiceList(titleList);
    }
  }, [searchText])
  return (
    <View style={styles.container}>
      <View >
        <AppBar
          leading={props => (
            <CustomGoBackIcon {...props} />
          )}
          title="Hizmetler"
          tintColor='white'
          centerTitle={true}
          color='#79b5e3' />
      </View >

      <View style={{ paddingHorizontal: 12, marginBottom : 140 }}>
        <CustomInput
          style={{ paddingLeft: 15, paddingRight: 15 }}
          setValue={setSearchText}
          value={searchText}
          editable={true}
          icon={'text-search'}
          placeholder={'Hizmet Ara'}
          secureTextEntry={false} />
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={serviceList}
          renderItem={({ item }) =>
            <TouchableWithoutFeedback
              onPress={() => onTapCard(item.id)}
              style={{ width: '100%', borderRadius: 15 }}>
              <View style={{ flexDirection: 'row', padding: 10, marginBottom: 15, backgroundColor: 'white', borderRadius: 12, elevation: 3 }}>
                {selectedIdList.includes(item.id) ?
                  <Icon
                    color='green'
                    name={'check-square'}
                    size={26}
                    style={{ width: ICON_SIZE, height: ICON_SIZE, borderRadius: ICON_SIZE, marginRight: SPACING / 2 }}
                  /> :
                  <Icon
                    color='#79b5e3'
                    name={'square'}
                    size={26}
                    style={{ width: ICON_SIZE, height: ICON_SIZE, borderRadius: ICON_SIZE, marginRight: SPACING / 2 }}
                  />
                }
                <View>
                  <Text style={styles.largeText}>
                    {item.title}
                  </Text>
                  <Text style={styles.mediumText}>
                    SUT KODU:
                    <Text style={styles.smallText}>
                      {item.sutCode}</Text>
                  </Text>
                  <Text style={styles.mediumText}>
                    FİYAT:
                    <Text style={styles.smallText}>
                      {item.sutPrice} ₺</Text>
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback >

          } />
      </View>
      {
        selectedIdList.length > 0 &&
        <TouchableOpacity onPress={addServiceButtonTap} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>}

    </View>

  )
}
export default ServiceAddScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    height: 60,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTest: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    margin: 5,
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'space-around',
    paddingLeft: 10,
    elevation: 1
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },
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
});
