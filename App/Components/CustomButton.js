import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Text } from 'react-native'
import { View } from 'react-native-animatable'

import styles from './Styles/CustomButtonStyle'

import TouchableView from './TouchableView'

const CustomButton = ({ onPress, isEnabled, isLoading, text, buttonStyle, textStyle, ...otherProps }) => {
  const onButtonPress = isEnabled && !isLoading ? onPress : () => null

  return (
    <View {...otherProps}>
      <TouchableView onPress={onButtonPress} style={[styles.button, buttonStyle]}>
        {(isLoading) && <ActivityIndicator style={styles.spinner} color={'grey'} />}
        {(!isLoading) && <Text style={[styles.text, textStyle]}>{text}</Text>}
      </TouchableView>
    </View>
  )
}

CustomButton.propTypes = {
  onPress: PropTypes.func,
  isEnabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any
}

CustomButton.defaultProps = {
  onPress: () => null,
  isEnabled: true,
  isLoading: false
}

export default CustomButton
