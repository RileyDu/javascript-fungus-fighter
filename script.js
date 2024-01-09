// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let fungusAP = 100;
let myAPElement = document.getElementsByClassName("ap-text")[0];
let yourHPElement = document.getElementsByClassName("hp-text")[0];
// console.log(yourHPElement, myAPElement);
let hpMeter = document.getElementById('hp-meter')
let apMeter = document.getElementById('ap-meter')

function onReady() {
  console.log("Ready to go!");

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

onReady();

function checkAP() {
  if (fungusAP === 0) {
    let imDead = document.getElementsByClassName("walk")[0];
    imDead.classList.remove("walk");
    imDead.classList.add("jump");
    let buttons = document.getElementsByClassName('attack-btn')
    for (button of buttons){
        button.disabled = true;
    }
  }
}

function checkHP() {
  if (fungusHP === 0) {
    let yourDead = document.getElementsByClassName("walk")[0];
    yourDead.classList.remove("walk");
    yourDead.classList.add("dead");
    // console.log(yourDead);
  }
}

function fireScepter(event) {
  console.log("Fire Scepter!");
  fungusHP -= 14;
  fungusAP -= 12;
  hpMeter.value -= 14;
  apMeter.value -= 12;
  if (fungusAP < 0) {
    fungusAP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  console.log(fungusAP, fungusHP);
  myAPElement.innerHTML = `${fungusAP} AP`;
  yourHPElement.innerHTML = `${fungusHP} HP`;
  checkHP();
  checkAP();
}

function fireEntagle(event) {
  console.log("Fire Entagle!");
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
  console.log("Fire Blade!");
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
  console.log("Fire Star!");
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
}
