const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

let btn = document.getElementById("btn");
let colorOne = document.getElementById("hex-one");
let colorTwo = document.getElementById("hex-two");
let colorThree = document.getElementById("hex-three");

btn.addEventListener("click", (event) => {
  // generate a random color for each container
  let randomColorOne = getRandomColor();
  let randomColorTwo = getRandomColor();
  let randomColorThree = getRandomColor();

  // apply colors to the respective containers
  document.getElementById("color-one").style.backgroundColor = randomColorOne;
  document.getElementById("color-two").style.backgroundColor = randomColorTwo;
  document.getElementById("color-three").style.backgroundColor = randomColorThree;

  // update the displayed hex code
  colorOne.textContent = randomColorOne;
  colorTwo.textContent = randomColorTwo;
  colorThree.textContent = randomColorThree;
});

// function to generate random hex color
function getRandomColor() {
  let randomColor = "#";

  for (var i = 0; i < 6; i++) {
    randomColor += hex[getRandomNumber()];
  }

  return randomColor;
}

// functon to get a random number
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}