import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import SafeAreaComp from '../../../components/SafeAreaComp';
import { OTP_COUNTRY_LIST } from '../../constants/AreaLocalData';

const OtpScreen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(OTP_COUNTRY_LIST[0]);
  const [showCountryList, setShowCountryList] = useState(false);

  const ORView = () => (
    <View style={styles.orContainer}>
      <View style={styles.line} />
      <View style={styles.orTextContainer}>
        <Text style={styles.orText}>Or</Text>
      </View>
      <View style={styles.line} />
    </View>
  );

  return (
    <SafeAreaComp>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Your Mobile Number</Text>

        <View style={styles.inputRow}>
          <TouchableOpacity onPress={() => setShowCountryList(!showCountryList)}>
            <View style={styles.countryPicker}>
              <Image source={selectedCountry.image} style={styles.flagImage} />
              <Image
                source={require('../../assests/images/down.png')}
                style={styles.downArrow}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.phoneInputContainer}>
            <Text style={styles.codeText}>{selectedCountry.code}</Text>
            <TextInput
              placeholder="1234567890"
              keyboardType="number-pad"
              placeholderTextColor="#999"
              style={styles.textInput}
            />
          </View>
        </View>

        {showCountryList && (
          <View style={styles.countryListContainer}>
            {OTP_COUNTRY_LIST.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setSelectedCountry(item);
                  setShowCountryList(false);
                }}
              >
                <View style={styles.countryItem}>
                  <View style={styles.countryInfo}>
                    <Image source={item.image} style={styles.flagImage} />
                    <Text style={styles.countryText}>{item.country}</Text>
                  </View>
                  <Text style={styles.countryCodeText}>{item.code}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueBtn}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        {/* OR View (Optional alternative login method) */}
        <ORView/>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 5,
          backgroundColor: '#e5e7e9',
          justifyContent:'center', 
          alignItems:'center',
          marginTop: 10,
        }}>
          <Image source={require('../../../src/assests/images/google.png')} style={styles.googleImage} />
          <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold',  }}>Continue with Google</Text>
        </View>
        <ORView/>
        <Text style={{ fontSize: 14,color: '#7F8c8d', }}>
          By Processing, you contact to get cells, Whatsaap or SMS messages, including by automated, from Uber and its affiliates to the number provided. Text "STOP" to 89203 to opt out.
        </Text>
        <View style={{ justifyContent:'flex-end', flex: 1,  }}>
          <View style={{ flexDirection: 'row',flexWrap: 'wrap', }}>
            <Text style={{ fontSize: 10, color: '#7F8c8d', marginTop: 10 }}>
           This site is protected by reCAPTCHA and the Google 
          </Text>
          <Text style={{ fontSize: 12, color: 'black', marginTop: 10, textDecorationLine: 'underline', paddingHorizontal: 5}}>
            Privacy Policy 
          </Text>
          <Text style={{ fontSize: 12, color: '#7F8c8d', }}>
           and 
          </Text>
          <Text style={{ fontSize: 12, color: 'black', textDecorationLine: 'underline', paddingHorizontal: 5  }}>
           Terms of Service 
          </Text>
          <Text style={{ fontSize: 12, color: '#7F8c8d',  }}>
           apply.
          </Text>
          </View>
        </View>
      </View>
    </SafeAreaComp>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  countryPicker: {
    backgroundColor: '#eeeeee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImage: {
    width: 30,
    height: 30,
  },
  googleImage: {width: 30,
    height: 30,
    marginRight: 10,},
  downArrow: {
    width: 20,
    height: 20,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  phoneInputContainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  codeText: {
    marginRight: 5,
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  countryListContainer: {
    marginTop: 15,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 2,
    backgroundColor: '#eeeeee',
    borderRadius: 1,
    marginBottom: 8,
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  countryText: {
    marginLeft: 10,
    fontSize: 16,
  },
  countryCodeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  continueBtn: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 5,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7e9',
  },
  orTextContainer: {
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 14,
    color: '#888',
  },
});
