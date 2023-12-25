import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import SearchBar from '../Common/SearchBar'

export default class ContractorLocator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar/>
        <Image
            source={require("../../assets/map.png")}
            style={styles.image}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        paddingTop: 100,
        backgroundColor: "#fff"
    },
    image: {
        height: "100%",
        width: "100%"
    }
})