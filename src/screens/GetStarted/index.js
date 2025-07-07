import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import SafeAreaComp from '../../../components/SafeAreaComp'


const GetStarted = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0595ed' }}>
      <SafeAreaComp>
        <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 50, fontWeight: '600', color: 'white' }}>Uber</Text>
          <Image resizeMode='contain' style={{
            height: 200,
            borderRadius: 6,
          }} source={require('../../../src/assests/images/UberCar.png')} />
          <Text style={{ fontSize: 40, fontWeight: '600', color: 'white' }}>Move with Safety</Text>

        </View>
        
          <View style={{ flex: 0.4, justifyContent:'flex-end', paddingHorizontal: 20, marginBottom:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
          <View style={{backgroundColor:'black', flexDirection:'row', padding: 15, alignItems:'center', justifyContent:'space-between', }}>
          <View style={{flex:'0.8', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white'}}>GetStarted</Text>
            </View>
            <View style={{flex:'0.2', alignItems:'flex-end'}}>
              <Image resizeMode='contain' style={{
            width: 20,
            height: 20, 
          }} source={require('../../../src/assests/images/arrow.png')} />
            </View>
          
          </View>
           </TouchableOpacity>
        </View>
       

      </SafeAreaComp>
     
      </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({})