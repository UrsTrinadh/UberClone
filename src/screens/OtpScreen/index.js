import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import SafeAreaComp from '../../../components/SafeAreaComp';
import { OTP_COUNTRY_LIST } from '../../constants/AreaLocalData';

const OtpScreen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(OTP_COUNTRY_LIST[0]);
  return (
    <SafeAreaComp>
      <View style={{ flex: 1, padding: 20, backgroundColor: '#ffffff' }}>
        <Text style={{ fontSize: 20, fontWeight: 400 }}>
          Enter Your Mobile Number
        </Text>
        
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#eeeeee',
                marginTop: 10,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 5,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={selectedCountry.image}
                style={{ width: 30, height: 30 }}
              />
              <Image
                source={require('../../assests/images/down.png')}
                style={{ width: 20, height: 30, marginLeft: 10 }}
              />
            </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 0.9,
                backgroundColor: '#eeeeee',
                marginTop: 8,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 10,
                marginLeft: 10}}>
                    <Text style={{marginRight:10}} >{selectedCountry.code}</Text>
            <TextInput 
            placeholder='1234567890'
            keyboardType='number-pad'/>
            </View>
          </View>
        
      </View>
    </SafeAreaComp>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
