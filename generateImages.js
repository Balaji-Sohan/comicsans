const fs = require('fs');
const path = require('path');

// Path to the 'images' directory
const imagesDir = path.join(__dirname, 'Images'); // Changed from 'Pictures' to 'images'

// Read all files in the 'images' directory
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Unable to scan directory:', err);
    process.exit(1);
  }

  // Filter image files based on common extensions
  const imageFiles = files.filter((file) => {
    return /\.(jpe?g|png|gif|bmp)$/i.test(file);
  });

  // Write the array of filenames to images.json
  fs.writeFile(
    path.join(__dirname, 'images.json'),
    JSON.stringify(imageFiles),
    (err) => {
      if (err) {
        console.error('Error writing images.json:', err);
        process.exit(1);
      }
      console.log('images.json has been generated successfully.');
    }
  );
});
