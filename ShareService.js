import { Platform } from "react-native";
import Share from "react-native-share";
import RNFetchBlob from "react-native-fetch-blob";
const RNFS = RNFetchBlob.fs;
const DIRS = RNFetchBlob.fs.dirs;
export function shareImageOrPDF(fileUrl, type) {
  try {
    let filePath = `${RNFS.DocumentDirectoryPath}/${fileUrl}.pdf`;
    let file_url_length = fileUrl.length;

    const configOptions = {
      fileCache: true
    };

    if (Platform.OS === "ios") {
      configOptions.path =
        DIRS.DocumentDir +
        (type === "application/pdf" ? "/temp.pdf" : "/temp.png"); // no difference when using jpeg / jpg / png /
    }

    RNFetchBlob.config(configOptions)
      .fetch("GET", fileUrl)
      // the image or pdf is now dowloaded to device's storage
      .then(async resp => {
        filePath = resp.path();

        let uri =
          Platform.OS === "android" ? "file://" + filePath : "" + filePath;

        let options = {
          type: type,
          subject: "Subject",
          message: "TestMessage",
          //   title: "TestTitle",
          url: uri
        };

        await Share.open(options);
        // remove the image or pdf from device's storage
        await RNFetchBlob.fs.unlink(filePath);
      });
  } catch (error) {
    // console.log(error);
  }
}
