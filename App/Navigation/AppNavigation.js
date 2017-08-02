import { TabNavigator } from 'react-navigation'
import GuestList from '../Containers/GuestListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import Color from '../Themes/Colors'

import styles from './Styles/NavigationStyles'
import ScanScreen from '../Containers/ScanScreen'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  Guests: { screen: GuestList },
  LaunchScreen: { screen: LaunchScreen },
  CheckIn: { screen: ScanScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: Color.green
  }
})

export default PrimaryNav
