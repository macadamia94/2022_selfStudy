/* 
const UNSPLASH_API_KEY = "a1xZRBE9bmyz5AGmwH2E2xYhJBy2GZbi9m5DjJrkFSA"
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;
*/

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpeg", "4.jpeg", "5.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);