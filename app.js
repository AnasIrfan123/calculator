var display = ''

function getNum(num) {
    display += num
    
    var displayElement = document.getElementById('display')
    displayElement.value = display
}
function calculate(){
    var displayElement = document.getElementById('display')
    var value = displayElement.value
   if (value != ''){
    
    var result = eval(value)
  
    displayElement.value = result
    display = result
   }
}
function cls(){
    var displayElement = document.getElementById('display')
     displayElement.value = "";
     display = "";
}
function del(){
    var displayElement = document.getElementById('display')
     displayElement.value = displayElement.value.toString().slice(0, -1);
     display = display.toString().slice(0, -1);
}

//     CALCULATOR 2 (youtube)

// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll("button");
// const specialChars = ["%", "*", "/", "-", "+", "="];
// let output = "";

// //Define function to calculate based on button clicked.
// const calculate = (btnValue) => {
//    if(btnValue === "=" && output !== ""){
//     //If output has '%', replace with '/100 before evaluating
//     output = eval(output.replace("%", "/100"));
//    }else if(btnValue === "AC"){
//      output = ""
//    } else if(btnValue === "DEL"){
//     //if DEL button is clicked, before the last character from the output.
//     output = output.toString().slice(0, -1);
//    } else{
//     //if output is empty and button is specialChars then return
//     if(output === "" && specialChars.includes(btnValue)) return;
//     output += btnValue;
//    }
//     display.value = output;
// };
// //Add event listener to buttons, call calculate() on click.
// buttons.forEach((button) => {
//     //Button click listener calls calculate() with dataset value as argument.
//     button.addEventListener("click", (e) => calculate(e.target.dataset.value));
// });