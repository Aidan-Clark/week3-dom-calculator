document.addEventListener("DOMContentLoaded", function() {
  var keepRunning = true;
  var calculatorStage = 0;
  var equation = "";


  var numberButtons = document.getElementsByClassName("buttonNum");
  var operatorButtons = document.getElementsByClassName("operator");

  function getNumber() {
    for (i = 0; i < numberButtons.length; i++) {
      numberButtons[i].addEventListener("click", function() {
        if (calculatorStage == 0 || calculatorStage == 2) {
          equation += this.innerHTML;
          console.log(equation);
          calculatorStage += 1;

          if (calculatorStage == 1) {
            getOperator();
          } else {
            getResult();
          }

        }

      });
    }
  }

  function getOperator() {
    for (i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].addEventListener("click", function() {
        if (calculatorStage == 1) {
          equation += this.innerHTML;
          console.log(equation);
          calculatorStage += 1;
          getNumber();
        }

      });
    }
  }

  getNumber();


});
