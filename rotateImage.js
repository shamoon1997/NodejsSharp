const sharp = require('sharp');

async function rotateImage() {
  try {
    await sharp('Passport_Size.png').rotate(90).toFile('passport-rotate.png');
  } catch (Error) {
    console.log(Error);
  }
}

async function cropImageWithGrayScale() {
  try {
    await sharp('sammy.png')
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

rotateImage();
// cropImage();
// cropImageWithGrayScale();
