const sharp = require('sharp');

async function compositeImage() {
  try {
    await sharp('underwater.png')
      .composite([
        {
          input: 'Passport_Size_Cropped.png',
          top: 50,
          left: 200,
        },
      ])
      .toFile('Passport_Under_Water.png');
  } catch (Error) {
    console.log(Error);
  }
}

compositeImage();
