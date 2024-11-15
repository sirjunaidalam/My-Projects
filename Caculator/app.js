var display = document.getElementById("display");
var textOnScreen = false;

function addNumToDisplay(num) {
  if (display.value.length < 12) {
    if (textOnScreen == true) {
      display.value = "";
      textOnScreen = false;
    }
    display.value += num;
  }
}

function addOptToDisplay(opt) {
  if (display.value != "" && display.value != "Error") {
    display.value = display.value.replace(/[\+\-\*\/]+$/, "") + opt;
  } else{
    display.value = "";
  }
}

function addDecimalPoint() {
  var lastNumber = display.value.split(/[\+\-\*\/]/).pop();
  if (!lastNumber.includes(".")) {
    display.value += ".";
  }
}

function clearScreen() {
  display.value = "";
  textOnScreen = false;
}

function deleteCharacter() {
  display.value = display.value.slice(0, -1);
}

function execute() {
  try {
    display.value = eval(display.value);
    textOnScreen = true;
  } catch (error) {
    display.value = "Error";
    textOnScreen = true;
  }
}

function squareRoot() {
    display.value = Math.sqrt(eval(display.value)).toFixed(3);
    textOnScreen = true;
}

function multiplicativeInverse() {
  if (Number(display.value)) {
    display.value = (1 / display.value).toFixed(3);
    textOnScreen = true;
  }
}
