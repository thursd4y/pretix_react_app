/**
 * Created by stoez on 17/07/2017.
 */

import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class LaunchScreen extends Component {
  onSuccess (e) {
    console.log(e)
  }

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return (
        <Icon name='qrcode-scan' size={30} color={tintColor} />
      )
    }
  };

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <QRCodeScanner onRead={this.onSuccess} />
        </ScrollView>
      </View>
    )
  }
}
