let cube = document.querySelectorAll('.cube');
let rollBtn = document.querySelector('.rollBtn');
let bankroll = 20;
document.getElementById("bankroll").innerHTML = "bankroll is:" + bankroll;
rollBtn.disabled = true;
let submitBtn = document.querySelector('.submitBtn');
let inputbar = document.getElementById("bet")
let first_roll = true;
let point = 0;

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

function second_phase(rolled_point) {
  roll = rollDice()
  if (roll = rolled_point) {
    first_roll = true;
    return "WIN";
  }
  if (roll = 7) {
    first_roll = true;
    return "LOSE";
  }
}

function first_phase(roll){
  if (first_roll) {
    roll = roll_dice();
    if (roll === 7 || roll === 11) {
      return "WIN";
    }
    else if (roll === 2 || roll === 3 || roll === 12 ) {
      return "LOSE";
    }
    else {
      point = roll;
      first_roll = false;
    }
  }
  else {
    second_phase(point);
  }
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
    submitBtn.style.visibility ="hidden";
    inputbar.style.visibility = "hidden";
    return true;
  }
}
// set initial side
rollDice();
submitBtn.addEventListener("click", validateinput);
rollBtn.addEventListener("click", first_phase);