/**
 * Created by stoez on 17/07/2017.
 */

import React from 'react'
import { Text, View } from 'react-native'

export default class Header extends React.Component {
  render () {
    console.log(this.props.navigation)
    return (
      <View style={{height: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
        <Text>hi</Text>
      </View>
    )
  }
}
