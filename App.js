/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { shareImageOrPDF } from "./ShareService";

export default class App extends Component<Props> {
  onPressShareImage = () => {
    const url = "https://picsum.photos/200/300";
    shareImageOrPDF(url, "image/jpeg");
  };
  onPressSharePDF = () => {
    const url = "https://www.nimoz.pl/files/publications/2/loremipsum.pdf";
    shareImageOrPDF(url, "application/pdf");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Share image or PDF with WhatsApp, Gmail etc...
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressShareImage}
        >
          <Text style={styles.instructions}>{"Share Image"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onPressSharePDF}>
          <Text style={styles.instructions}>{"Share PDF"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "white",
    marginBottom: 5,
    fontSize: 16
  },
  button: {
    borderRadius: 8,
    margin: 8,
    padding: 8,
    backgroundColor: "blue"
  }
});
