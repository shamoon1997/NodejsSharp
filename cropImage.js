const sharp = require('sharp');

async function cropImage() {
  try {
    await sharp('Passport_Size.png')
      .extract({
        width: 370,
        height: 480,
        left: 40,
        top: 30,
      })
      .toFile('Passport_Size_Cropped.png');
  } catch (Error) {
    console.log(Error);
  }
}

async function cropImageWithGrayScale() {
  try {
    await sharp('Passport_Size.png')
      .extract({
        width: 500,
        height: 300,
        left: 120,
        top: 70,
      })
      .grayscale()
      .toFile('sammy-cropped-grapscale.png');
  } catch (Error) {
    console.log(Error);
  }
}

cropImage();
// cropImageWithGrayScale();
