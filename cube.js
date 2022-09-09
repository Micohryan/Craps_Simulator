let cube = document.querySelectorAll('.cube');
let rollBtn = document.querySelector('.rollBtn');
let bankroll = 20;
document.getElementById("bankroll").innerHTML = "bankroll is:" + bankroll;
rollBtn.disabled = true;
let submitBtn = document.querySelector('.submitBtn');

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

function validateinput() {
  let numInput = document.getElementById("bet").value;
  let text;
  if (isNaN(numInput) || numInput < 1 || numInput > bankroll) {
    text = "Invalid Input"
    document.getElementById("demo").innerHTML = text;
    return false;
  }
  else {
    text = "Valid bet please roll"
    document.getElementById("demo").innerHTML = text;
    rollBtn.disabled = false;
    return true;
  }
}
// set initial side
rollDice();
submitBtn.addEventListener("click", validateinput);
rollBtn.addEventListener("click", rollDice);