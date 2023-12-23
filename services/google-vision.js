const tesseract = require("node-tesseract-ocr")
const path = require('path');

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}

tesseract
    .recognize(path.resolve('../public/sample.jpg'), config)
    .then((text) => {
        console.log("Result:", text)
    })
    .catch((error) => {
        console.log(error.message)
    })