document.addEventListener("DOMContentLoaded", function() {
  var keepRunning = true;
  var calculatorStage = 0;
  var equation = "";


  var numberButtons = document.getElementsByClassName("buttonNum");
  var operatorButtons = document.getElementsByClassName("operator");
  var equalsButton = document.getElementsByClassName("equals")[0];

  function updateScreen(text) {
    var idScreen = document.getElementById("screen");
    idScreen.innerHTML = text;
  }

  function numberClick() {
    for (i = 0; i < numberButtons.length; i++) {
      numberButtons[i].addEventListener("click", numberFunction);
    }
  }

  function numberFunction() {
    if (calculatorStage == 0 || calculatorStage == 2) {
      equation += this.innerHTML;
      updateScreen(equation);
      calculatorStage += 1;

      if (calculatorStage == 1) {
        operatorClick();
      } else {
        resultClick();
      }
    }
  }

  function operatorClick() {
    for (i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].addEventListener("click", operatorFunction);
    }
  }

  function operatorFunction() {
    if (calculatorStage == 1) {
      equation += this.innerHTML;
      updateScreen(equation);
      calculatorStage += 1;
      numberClick();
    }
  }

  function resultClick() {
    equalsButton.addEventListener("click", resultFunction);
  }

  function resultFunction() {
    result = eval(equation);
    updateScreen(result);
  }

  numberClick();


});
