import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ModalPicker from 'react-native-modal-picker'

import { View } from 'react-native-animatable'

import CustomButton from './CustomButton'
import CustomTextInput from './CustomTextInput'

import styles from './Styles/LoginFormStyle'

export default class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onLoginPress: PropTypes.func.isRequired
  }

  state = {
    password: '',
    busInputValue: '',
    eventInputValue: ''
  }

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  render () {
    /* TODO Replace with API call */
    let index = 0
    const data = [
      { key: index++, section: true, label: 'Events' },
      { key: index++, label: 'Red Pearl Party' },
      { key: index++, label: 'Black Pearl Party' },
      { key: index++, label: 'Pink Pearl Party' },
      { key: index++, label: 'Green Pearl Party' },
      { key: index++, label: 'Honeydew Pearl Party' }
    ]
    /* TODO Replace with API call */
    const data1 = [
      { key: index++, section: true, label: 'Buses' },
      { key: index++, label: 'Red Pearl Bus' },
      { key: index++, label: 'Black Pearl Bus' },
      { key: index++, label: 'Pink Pearl Bus' },
      { key: index++, label: 'Green Pearl Bus' },
      { key: index++, label: 'Honeydew Pearl Bus' }
    ]

    const { password, eventInputValue, busInputValue } = this.state
    const { isLoading, onLoginPress } = this.props
    const isValid = password !== '' && eventInputValue !== '' && busInputValue !== ''
    return (
      <View style={styles.container}>
        <View style={styles.form} ref={(ref) => { this.formRef = ref }}>
          <ModalPicker
            data={data}
            cancelText='Cancel'
            initValue='Select an event!'
            onChange={(option) => { this.setState({eventInputValue: option.label}) }}>

            <CustomTextInput
              editable={false}
              placeholder='Select an event!'
              value={this.state.eventInputValue} />

          </ModalPicker>
          <ModalPicker
            data={data1}
            cancelText='Cancel'
            initValue='Select your bus!'
            onChange={(option) => { this.setState({busInputValue: option.label}) }}>

            <CustomTextInput
              editable={false}
              placeholder='Select your bus!'
              value={this.state.busInputValue} />

          </ModalPicker>
          <CustomTextInput
            name={'password'}
            ref={(ref) => (this.passwordInputRef = ref)}
            placeholder={'API Key'}
            editable={!isLoading}
            returnKeyType={'done'}
            secureTextEntry
            withRef
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => (this.buttonRef = ref)} animation={'bounceIn'} duration={600} delay={400}>
            <CustomButton
              onPress={() => onLoginPress(password, eventInputValue, busInputValue)}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
              text={'Log In'}
            />
          </View>
        </View>
      </View>
    )
  }
}
