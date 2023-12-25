import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

class BidCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {bid} = this.props;
    return (
      <View style={styles.item}>
        <Text style={styles.titleText}> {bid.title} </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoChild}>
            <Text style={styles.headingText}>{"2 days left"}</Text>
            <Text style={styles.textInGray}>{`Bid Duration`}</Text>
          </View>
          <View style={styles.infoChild}>
            <Text style={styles.headingText}>{bid.budget}</Text>
          <Text style={styles.textInGray}>{`Bid Amount`}</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginHorizontal: 5,
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    // Shadow properties for iOS
    shadowColor: "#351c75",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,

    // Elevation for Android
    elevation: 5,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
  },
  textInGray: {
    color: "gray",
  },
  infoChild: {
    flex: 1,
    marginVertical: 10
  },
  headingText: {
    fontSize: 15,
    fontWeight: "700",
  },
  absButtons: {
    position: "absolute",
    height: 40,
    width: 40,
    right: 15,
    top: 10,
    flexDirection: "row",
  },
  circularButtons: {
    borderRadius: 50,
    // borderColor: 'gray',
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    margin: "5%",
  },
});


export default BidCard