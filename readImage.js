const sharp = require('sharp');

async function readImage() {
  try {
    const metaInformation = await sharp('sammy.png').metadata();
    console.log(metaInformation);
  } catch (Error) {
    console.log('An error occured' + Error);
  }
}

readImage();
