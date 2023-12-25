import React, { Component } from "react";
import { Text, TextInput } from "react-native";

class TextInputWithoutIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    const { isFocused } = this.state;
    const { placeholder, keyboardType } = this.props;

    return (
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={isFocused ? "#ff9d00" : "#ccc"}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        keyboardType={keyboardType}
        style={{
          flex: 1,
          height: 40,
          borderColor: isFocused ? "#ff9d00" : "#ccc",
          borderWidth: 1,
          width: "100%",
          paddingLeft: 10,
          borderRadius: 10,
          marginVertical: 10,
        }}
      />
    );
  }
}

export default TextInputWithoutIcon;
