const sharp = require('sharp');

async function resizeImage() {
  try {
    await sharp('sammy.png')
      .resize({
        width: 150,
        height: 150,
      })
      .toFormat('jpeg', { mozjpeg: true })
      .toFile('sammy-resize-formatted.jpeg');
  } catch (Error) {
    console.log(Error);
  }
}

resizeImage();
