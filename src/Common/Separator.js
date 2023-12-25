import React, { Component } from "react";
import { Text, View } from "react-native";

class Separator extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {text} = this.props;
        return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#CED0CE",
          width: "80%",
        //   marginTop: 20,
          marginBottom: 20,
          
        //   backgroundColor: "#ffc9d0"
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "gray",
            top: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
          }}
        >
        {text}
          {/* Or */}
        </Text>
      </View>
    );
  }
}

export default Separator;
