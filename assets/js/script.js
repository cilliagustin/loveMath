// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
           if(this.getAttribute("data-type") === "submit"){
            checkAnswer();
           } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
           }
        })
    }

    runGame("addition")
})

/**
 * The main "loop", called when the script is loaded
 * and after the user´s aswer has been processed
 */
function runGame(gameType){

    //Random numbers between 1 and 25
    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else{
        alert(`Unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * checks the answer against the first element in
 * the returned calculateCorrectArray array
 */
function checkAnswer(){
    
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    
    if(isCorrect) {
        alert("Right")
    } else {
        alert(`Your answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`)
    }
    
    runGame(calculatedAnswer[1])
}

/**
 * Get operands (numbers) and operator (+ - / *)
 * from the DOM and return correct answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+") {
        return [operand1 + operand2, "addition"]
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
function runGdisplaySubtractQuestioname(){

}
function displayMultiplyQuestion(){

}