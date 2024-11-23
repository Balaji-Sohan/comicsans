// script.js

// Function to select two random images
function getRandomImages(arr, num) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// Fetch the list of images from images.json
fetch('images.json')
  .then(response => response.json())
  .then(imageFilenames => {
    // Display the images
    const cartoonContainer = document.getElementById('cartoon-container');
    const dailyImages = getRandomImages(imageFilenames, 1);

    dailyImages.forEach((filename) => {
      const img = document.createElement('img');
      const encodedFilename = encodeURIComponent(filename);
      img.src = 'images/' + encodedFilename;
      img.className = 'cartoon';
      cartoonContainer.appendChild(img);
    });
  })
  .catch(error => {
    console.error('Error fetching images:', error);
    const cartoonContainer = document.getElementById('cartoon-container');
    cartoonContainer.innerHTML = '<p>Error loading images. Please try again later.</p>';
  });
