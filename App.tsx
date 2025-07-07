// File: App.tsxs
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import splashscreen from './src/screens/splash/index.js'
import GetStarted from './src/screens/GetStarted/index.js'
import OtpScreen from './src/screens/OtpScreen/index.js'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={splashscreen}/>
        <Stack.Screen name="GetStarted" component={GetStarted}/>
        <Stack.Screen name="OtpScreen" component={OtpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

