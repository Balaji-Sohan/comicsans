// script.js

// Function to select one random image
function getRandomImage(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Fetch the list of images from images.json
fetch('images.json')
  .then(response => response.json())
  .then(imageFilenames => {
    // Display the image
    const cartoonContainer = document.getElementById('cartoon-container');
    const filename = getRandomImage(imageFilenames);

    const img = document.createElement('img');
    const encodedFilename = encodeURIComponent(filename);
    img.src = 'images/' + encodedFilename;
    img.className = 'cartoon';
    cartoonContainer.appendChild(img);
  })
  .catch(error => {
    console.error('Error fetching images:', error);
    const cartoonContainer = document.getElementById('cartoon-container');
    cartoonContainer.innerHTML = '<p>Error loading image. Please try again later.</p>';
  });

