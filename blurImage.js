const sharp = require('sharp');

async function blurImage() {
  try {
    await sharp('Passport_Size.png').blur(20).toFile('Passport_Size_Blur.png');
  } catch (Error) {
    console.log(Error);
  }
}

blurImage();
