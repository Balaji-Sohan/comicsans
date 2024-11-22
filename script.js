// script.js

// List of image paths
const images = [
    'images/cartoon1.jpg',
    'images/cartoon2.jpg',
    'images/cartoon3.jpg',
    // Add more images as needed
  ];
  
  let currentIndex = 0;
  const maxPerDay = 2;
  let dailyImages = [];
  
  // Retrieve stored data
  const today = new Date().toDateString();
  const storedDate = localStorage.getItem('date');
  const storedImages = JSON.parse(localStorage.getItem('dailyImages'));
  
  if (storedDate === today && storedImages) {
    dailyImages = storedImages;
  } else {
    // Select two random images for the day
    dailyImages = images.sort(() => 0.5 - Math.random()).slice(0, maxPerDay);
    localStorage.setItem('date', today);
    localStorage.setItem('dailyImages', JSON.stringify(dailyImages));
    localStorage.setItem('likes', JSON.stringify([]));
    localStorage.setItem('dislikes', JSON.stringify([]));
  }
  
  function createCard(imageSrc) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${imageSrc})`;
    return card;
  }
  
  function setupCards() {
    const container = document.getElementById('card-container');
    dailyImages.forEach((imageSrc) => {
      const card = createCard(imageSrc);
      container.appendChild(card);
  
      const hammer = new Hammer(card);
      hammer.on('swipeleft', () => handleSwipe(card, 'dislike'));
      hammer.on('swiperight', () => handleSwipe(card, 'like'));
    });
  }
  
  function handleSwipe(card, action) {
    card.classList.add('hidden');
  
    const likes = JSON.parse(localStorage.getItem('likes'));
    const dislikes = JSON.parse(localStorage.getItem('dislikes'));
  
    if (action === 'like') {
      likes.push(dailyImages[currentIndex]);
      localStorage.setItem('likes', JSON.stringify(likes));
    } else {
      dislikes.push(dailyImages[currentIndex]);
      localStorage.setItem('dislikes', JSON.stringify(dislikes));
    }
  
    currentIndex++;
  }
  
  setupCards();
  