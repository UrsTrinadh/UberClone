import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeAreaComp = (props) => {
  return (
   <SafeAreaView style={{ flex: 1,  }}>
    {props.children}
   </SafeAreaView>
  )
}

export default SafeAreaComp

const styles = StyleSheet.create({})