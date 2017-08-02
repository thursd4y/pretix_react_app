import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'flex-start',

    flexDirection: 'row',
    padding: 7,
    borderBottomWidth: 0.5,
    borderColor: Colors.steel
  },
  sectionHeader: {
    backgroundColor: Colors.steel,
    padding: 7

  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.coal,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    color: Colors.coal
  },
  sectionLabel: {
    color: Colors.green,
    fontWeight: 'bold'
  },
  searchBox: {
    height: 10
  },
  listContent: {
  }
})
