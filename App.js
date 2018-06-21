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
    const url =
      "https://freiraumproto.s3.eu-central-1.amazonaws.com/app/59f1d19b8a3e505119ddb132/59f1d19b8a3e505119ddb131/1SAWm8Zj-ADCCAA92-51DE-4EDB-8934-2B8B79A459C9.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAIWB6ZY354QIADVYA%2F20180621%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20180621T092208Z&X-Amz-Expires=1800&X-Amz-Security-Token=FQoDYXdzECsaDNblDHzreZpIK7kexSKrAet0yPXwUXA3URJmt05AkC79IOOUpOMJ%2B39HfhX%2FTUarlQg66V7gb5y3nfj6oc0vvMYfPRAn2oVwQPvW2iYyHOmGGy7%2B%2FmaFvrdBYpfMM%2BNtbwQIdYIEfnCTFfGvEEska6wGXWj3ieSimFXzqtUepMGOLByMxhfunNVREJmATZj%2B00S8LbBS%2F6KuxNkAUIamFx6s2KI1Lv2vXvgXHicANRPnlMhToWJc6IXCNSjA3K3ZBQ%3D%3D&X-Amz-Signature=bfae74f5c1399be58b732d9ca242ee5cc195b2f2a4d6b72b16d8df9cb39697a6&X-Amz-SignedHeaders=host";
    shareImageOrPDF(url, "image/jpeg");
  };
  onPressSharePDF = () => {
    const url =
      "https://freiraumproto.s3.eu-central-1.amazonaws.com/app/59f1d19b8a3e505119ddb132/59f1d19b8a3e505119ddb131/eoz4qgnS-PDF_EXAMPLE.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAJP2B4GBGBPGJ7TOQ%2F20180621%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20180621T091929Z&X-Amz-Expires=1800&X-Amz-Security-Token=FQoDYXdzECoaDOG2nV3BumBz3UsTLSKrAVG525h1mJ%2F2EZGQKKTiGwtkCDA1bBHaUi9qe0Nvmy%2BoLq68eqL8LqOtpUOLSPkm1dklcvakYliSzcZO46Iv11QoHyExDkmOFPximMg%2FKuwBAMLqKQyuGVW8nB2gGmtEMmAPFgaeyFvR3fcUkQ4NWRraz4%2FhIPVYt7XL4xZzD1mL2gFT0BjKHP7noGnaskN2vr6ejSjwJBWlSWqKe95ZC2BU0iy%2Fa58sXZTG8iih263ZBQ%3D%3D&X-Amz-Signature=579bf308b6d79a5e71ad5d93910974384054f220842f2b81ff6f2449da1cd625&X-Amz-SignedHeaders=host";
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
