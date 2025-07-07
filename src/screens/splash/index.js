import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SafeAreaComp from '../../../components/SafeAreaComp.js'


const Splashscreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      // Navigate to the GetStarted screen after 3 seconds
      navigation.navigate('GetStarted');
    }, 3000);

    
}, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
   <SafeAreaComp >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontSize: 60, fontWeight: 600, color:'white' }}>Uber</Text>
    </View>
   </SafeAreaComp> 
    </View>)
}

export default Splashscreen

