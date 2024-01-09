// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let fungusAP = 100;
let myAPElement = document.getElementsByClassName('ap-text')[0];
let yourHPElement = document.getElementsByClassName('hp-text')[0];
console.log(yourHPElement,myAPElement);

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

onReady()

function renderFire(){

}

function fireScepter(event){
    console.log('Fire Scepter!')
    fungusHP -= 14
    fungusAP -= 12
    console.log(fungusAP, fungusHP)
    myAPElement.innerHTML = `${fungusAP} AP`
    yourHPElement.innerHTML = `${fungusHP} HP`
}

function fireEntagle(event){
    console.log('Fire Entagle!')
    fungusHP -= 9
    fungusAP -= 23
}

function fireBlade(event){
    console.log('Fire Blade!')
    fungusHP -= 47
    fungusAP -= 38
}

function fireStar(event){
    console.log('Fire Star!')
    fungusHP -= 25
    fungusAP -= 33
}