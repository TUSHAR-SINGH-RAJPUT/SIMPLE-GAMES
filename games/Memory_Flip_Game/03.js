let box=document.querySelectorAll(".boxes");
let card=document.querySelector(".card");

let img={
    1 : "1.webp",
    2 : "2.webp",
    3 : "3.webp",
    4 : "4.webp"
}
card.classList.add('img');
img.dataset.image = src;



card.addEventListener("Click",()=>{
        
});






const gameBoard = document.querySelector('.boxes');

// 8 unique images (you can replace with your own file paths or URLs)
const images = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp"
];

// duplicate each image to make pairs
const cardImages = [...images, ...images];

// shuffle the array randomly
cardImages.sort(() => Math.random() - 0.5);

// create cards dynamically
cardImages.forEach(src => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.image = src; // store image name for matching logic

  // inner HTML structure with front and back
  card.innerHTML = `
    <div class="front"></div>
    <div class="back">
      <img src="${src}" alt="card image">
    </div>
  `;

  gameBoard.appendChild(card);
});
