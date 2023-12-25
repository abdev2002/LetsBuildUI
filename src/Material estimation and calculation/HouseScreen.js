import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native'
import { colors } from '../Common/Colors';
class HouseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
 },
});


export default HouseScreen