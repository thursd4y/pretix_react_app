import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import { View } from 'react-native-animatable'

import styles from './Styles/CustomTextInputStyle'

// const IS_ANDROID = Platform.OS === 'android'

export default class AuthTextInput extends Component {
  static propTypes = {
    isEnabled: PropTypes.bool
  }

  state = {
    isFocused: false
  }

  focus = () => this.textInputRef.focus()

  render () {
    const { isEnabled, ...otherProps } = this.props
    const { isFocused } = this.state
    const color = isEnabled ? 'white' : 'rgba(255,255,255,0.4)'
    const borderColor = isFocused ? 'white' : 'rgba(255,255,255,0.4)'
    return (
      <View style={styles.container}>
        <View style={[styles.textInputWrapper, { borderColor }]}>
          <TextInput
            ref={(ref) => (this.textInputRef = ref)}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={[styles.textInput, { color }]}
            maxLength={32}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            selectionColor={'white'}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            {...otherProps}
          />
        </View>
      </View>
    )
  }
}