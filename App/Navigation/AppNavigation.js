import { TabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import ScanScreen from '../Containers/ScanScreen'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ScanScreen: { screen: ScanScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#e91e63'
  }
})

export default PrimaryNav
