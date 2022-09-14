let cube = document.querySelectorAll('.cube');
let rollBtn = document.querySelector('.rollBtn');
let bankroll = 20;
document.getElementById("bankroll").innerHTML = "bankroll is:" + bankroll;
rollBtn.disabled = true;
let submitBtn = document.querySelector('.submitBtn');
let inputbar = document.getElementById("bet")
let first_roll = true;
let point = 0;
let bet_size = 0;

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
  let sum = 0;
  cube.forEach((die) => { 
    toggleClass(die);
    let dice_roll = getRandomInt(1,7);
    die.dataset.roll = dice_roll;
    sum += dice_roll
  });
  return sum;
}
function winner() { /* win lose functions can be combined */
  submitBtn.style.visibility ="visible";
  inputbar.style.visibility = "visible";
  const bets = parseInt(bet_size);
  bankroll = bankroll + bets;
  document.getElementById("bankroll").innerHTML = "bankroll is:" + bankroll;
}

function lose() {
  submitBtn.style.visibility ="visible";
  inputbar.style.visibility = "visible";
  bankroll -= bet_size;
  document.getElementById("bankroll").innerHTML = "bankroll is:" + bankroll;
}

function second_phase(rolled_point) {
  roll = rollDice();
  console.log(roll);
  if (roll === rolled_point) {
    first_roll = true;
    document.getElementById("demo").innerHTML = "That's a Dubby Wubby";
    winner();
  }
  if (roll === 7) {
    first_roll = true;
    document.getElementById("demo").innerHTML = "That's a L";
    lose();
  }
  document.getElementById("demo").innerHTML = "Please click roll dice again";
}

function first_phase(roll){
  console.log(first_roll);
  if (first_roll) {
    roll = rollDice();
    if (roll === 7 || roll === 11) {
      document.getElementById("demo").innerHTML = "That's a Dubby Wubby";
      winner();
    }
    else if (roll === 2 || roll === 3 || roll === 12 ) {
      document.getElementById("demo").innerHTML = "That's a L";
      lose();
    }
    else {
      point = roll;
      first_roll = false;
      document.getElementById("demo").innerHTML = "Point is now " + point + " Please click roll dice again";
    }
  }
  else {
    second_phase(point);
  }
}

function validateinput() {
  let numInput = document.getElementById("bet").value;
  bet_size = numInput;
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
    submitBtn.style.visibility ="hidden";
    inputbar.style.visibility = "hidden";
    return true;
  }
}
// set initial side
rollDice();
submitBtn.addEventListener("click", validateinput);
rollBtn.addEventListener("click", first_phase);