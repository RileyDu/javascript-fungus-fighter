// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

let fungusHP = 100; // global to let access multiple times
let fungusAP = 100;
let myAPElement = document.getElementsByClassName("ap-text")[0]; //selects the div with the AP value
let yourHPElement = document.getElementsByClassName("hp-text")[0]; //selects the div with the HP value
// console.log(yourHPElement, myAPElement);
let hpMeter = document.getElementById("hp-meter"); // need a way to adjust & access the progress bar
let apMeter = document.getElementById("ap-meter"); // need a way to adjust & access the progress bar

function onReady() {
  console.log("Ready to go!");
}

onReady();

function checkAP() {
  if (fungusAP === 0) {
    let imDead = document.getElementsByClassName("walk")[0];
    imDead.classList.remove("walk");
    imDead.classList.add("jump");
    let buttons = document.getElementsByClassName("attack-btn");
    for (button of buttons) {
      // for of loop to assign the attribute to every button in the class
      button.disabled = true;
    } // if AP reaches 0 with most recent attack, disable buttons
  } // and change the mushroom class to jump(celly)
}

function checkHP() {
  if (fungusHP === 0) {
    let yourDead = document.getElementsByClassName("walk")[0];
    yourDead.classList.remove("walk");
    yourDead.classList.add("dead"); // when HP is zero change the mushroom to dead
    // console.log(yourDead);
  } else if (fungusHP < 50 && fungusHP > 0) {
    setInterval(regenHP, 1000);
  } // regen health of mushroom if less than 50
}

function regenHP() {
  yourHPElement.innerHTML = `${fungusHP++} HP`;
  hpMeter.value++;
} // adjust the DOM value AND the life bar

function fireScepter(event) {
  //   console.log("Fire Scepter!");
  fungusHP -= 14;
  fungusAP -= 12; // subtract from the global value
  hpMeter.value -= 14;
  apMeter.value -= 12; // subtract from the life bars
  if (fungusAP < 0) {
    fungusAP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  } // won't let HP & AP be negative
  //   console.log(fungusAP, fungusHP);
  myAPElement.innerHTML = `${fungusAP} AP`;
  yourHPElement.innerHTML = `${fungusHP} HP`; //renders the new calulation to DOM
  checkHP(); // conditionals are run in the function, waiting for a win state
  checkAP(); // conditionals are run in the function, waiting for a win state
}

function fireEntagle(event) {
  //   console.log("Fire Entagle!");
  fungusHP -= 9;
  fungusAP -= 23;
  hpMeter.value -= 9;
  apMeter.value -= 23;
  if (fungusAP < 0) {
    fungusAP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  myAPElement.innerHTML = `${fungusAP} AP`;
  yourHPElement.innerHTML = `${fungusHP} HP`;
  checkHP();
  checkAP();
}

function fireBlade(event) {
  //   console.log("Fire Blade!");
  fungusHP -= 47;
  fungusAP -= 38;
  hpMeter.value -= 47;
  apMeter.value -= 38;
  if (fungusAP < 0) {
    fungusAP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  myAPElement.innerHTML = `${fungusAP} AP`;
  yourHPElement.innerHTML = `${fungusHP} HP`;
  checkHP();
  checkAP();
}

function fireStar(event) {
  //   console.log("Fire Star!");
  fungusHP -= 25;
  fungusAP -= 33;
  hpMeter.value -= 25;
  apMeter.value -= 33;
  if (fungusAP < 0) {
    fungusAP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  myAPElement.innerHTML = `${fungusAP} AP`;
  yourHPElement.innerHTML = `${fungusHP} HP`;
  checkHP();
  checkAP();
} // the last three functions are the same as the first attack w/ various values
