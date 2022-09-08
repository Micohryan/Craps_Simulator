var cube = document.querySelectorAll('.cube');
var rollBtn = document.querySelector('.rollBtn');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function toggleClass(die) {
  die.classList.toggle("cube-1");
  die.classList.toggle("cube-2");
}
function rollDice() {
  cube.forEach((die) => {
    toggleClass(die);
    die.dataset.roll = getRandomInt(1,7);
  });
}
// set initial side
rollDice();

rollBtn.addEventListener("click", rollDice);
