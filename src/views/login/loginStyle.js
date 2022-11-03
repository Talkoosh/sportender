import { StyleSheet } from 'react-native'
import genericStyles from '../../style/generic.js'

export default StyleSheet.create({
  container: {
    backgroundColor: genericStyles.colors.darkGreen,
  },
  heading:{
    fontSize: 45,
  },
  text: {
    color: 'white',
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'white'
  },
})
