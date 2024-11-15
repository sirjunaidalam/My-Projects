var selectedNum = Math.round(Math.random()*10);
for(i=0; i<=Infinity; i++){
var guessNum = prompt("Guess the number that have been Selected (1-10)");
if(guessNum == selectedNum){
    alert("Bingo! Correct Answer");
    break;
} else if(guessNum == selectedNum+2 || guessNum == selectedNum-2){
    alert("Close enough to the correct answer");
} else if(guessNum == selectedNum+1 || guessNum == selectedNum-1){
    alert("Just 1 Number far away");
} else if(guessNum >= 1 && guessNum <= 10){
    alert("Sorry! You guess it wrong");
} else{
    alert("Invalid Data");
}
}