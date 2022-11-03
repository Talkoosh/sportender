import { View, Text, TextInput } from 'react-native'
import React from 'react'
import genericStyles from '../../style/generic'
import loginStyle from './loginStyle'

export function Login() {
  return (
    <View style={[loginStyle.container, genericStyles.pageContainer]}>
      <Text style={[loginStyle.text, loginStyle.heading]}>התחברות</Text>
      <View>
        <TextInput style={[loginStyle.input, loginStyle.text]}></TextInput>
        <TextInput secureTextEntry={true} style={loginStyle.input}></TextInput>
      </View>
    </View>
  )
}
