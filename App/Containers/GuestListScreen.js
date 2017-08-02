import React, { Component } from 'react'
import { View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/GuestListScreenStyle'
import SearchBar from '../Components/SearchBar'

class GuestList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return (
        <Icon name='format-list-bulleted' size={30} color={tintColor} />
      )
    }
  };

  constructor (props) {
    super(props)

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = {
      first: [
        {title: 'First', description: 'Description'},
        {title: 'Second', description: 'Description'},
        {title: 'Third', description: 'Description'},
        {title: 'Fourth', description: 'Description'},
        {title: 'Fifth', description: 'Description'},
        {title: 'Sixth', description: 'Description'},
        {title: 'Seventh', description: 'Description'},
        {title: 'Eighth', description: 'Description'},
        {title: 'Ninth', description: 'Description'},
        {title: 'Tenth', description: 'Description'}
      ],
      second: [
        {title: 'First', description: 'Description'},
        {title: 'Second', description: 'Description'},
        {title: 'Third', description: 'Description'},
        {title: 'Fourth', description: 'Description'},
        {title: 'Fifth', description: 'Description'},
        {title: 'Sixth', description: 'Description'},
        {title: 'Seventh', description: 'Description'},
        {title: 'Eighth', description: 'Description'},
        {title: 'Ninth', description: 'Description'},
        {title: 'Ninath', description: 'Description'},
        {title: 'Nintdh', description: 'Description'},
        {title: 'Nintfh', description: 'Description'},
        {title: 'Nintgh', description: 'Description'},
        {title: 'Nintdh', description: 'Description'},
        {title: 'Nindth', description: 'Description'},
        {title: 'Nidnth', description: 'Description'},
        {title: 'Ndinth', description: 'Description'},
        {title: 'Nainth', description: 'Description'},
        {title: 'Ndinth', description: 'Description'},
        {title: 'Ninth', description: 'Description'},
        {title: 'Tenth', description: 'Description'}
      ]
    }
    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *   The same goes for sectionHeaderHasChanged
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects),
      persons: dataObjects
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.title} </Text>
        <Text style={styles.label}>{rowData.description}</Text>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRowsAndSections(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderHeader (data, sectionID) {
    switch (sectionID) {
      case 'first':
        return <View style={styles.sectionHeader}><Text style={styles.sectionLabel}>First Section</Text></View>
      default:
        return <View style={styles.sectionHeader}><Text style={styles.sectionLabel}>Second Section</Text></View>
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <SearchBar style={styles.searchBox} onSearch={e => {
          // TODO Filter list
        }} onCancel={e => {
        }} />
        <ListView
          renderSectionHeader={this.renderHeader}
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList)
