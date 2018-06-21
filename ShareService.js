import Share from "react-native-share";
import RNFetchBlob from "react-native-fetch-blob";

export function shareImageOrPDF(fileUrl, type) {
  try {
    let filePath = null;
    let file_url_length = fileUrl.length;

    RNFetchBlob.config({ fileCache: true })
      .fetch("GET", fileUrl)
      // the image or pdf is now dowloaded to device's storage
      .then(resp => {
        filePath = resp.path();
        return resp.readFile("base64");
      })
      .then(async base64Data => {
        // here's base64 encoded image or pdf
        // type = application/pdf or image/png
        base64Data = `data:${type};base64,` + base64Data;

        // Sharing with WhatsApp need message and title??? WHY
        let options = {
          type: type,
          message: "",
          title: "",
          //   message: "TestMessage",
          //   title: "TestTitle",
          url: base64Data
        };

        await Share.open(options);

        // remove the image or pdf from device's storage
        RNFetchBlob.fs.unlink(filePath);
      });
  } catch (error) {
    // console.log(error);
  }
}
