import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom: 10
  },
  textInputWrapper: {
    height: 42,
    marginBottom: 2,
    borderBottomWidth: 1
  },
  textInput: {
    flex: 1,
    color: 'white',
    // margin: IS_ANDROID ? -1 : 0,
    height: 42,
    padding: 7
  }
})
