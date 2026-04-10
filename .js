function getHumanChoice(){
 return prompt("Pick rock,paper or scissors");
}
console.log(getHumanChoice());

function getComputerChoice(){
    const random=Math.random();
 if (random<0.33){
    return "rock";
 } else if(random>0.33 && random<0.66){
    return "paper";
 } else{
    return "scissors";
 }
}
console.log(getComputerChoice());


function  playGame() {

let humanScore = 0;
let computerScore = 0;
function playRound(HumanChoice, ComputerChoice) {
  HumanChoice = HumanChoice.toLowerCase();

  if (HumanChoice === ComputerChoice) {
    console.log("It's a tie");
  } 
  else if (
    (HumanChoice === "rock" && ComputerChoice === "scissors") ||
    (HumanChoice === "paper" && ComputerChoice === "rock") ||
    (HumanChoice === "scissors" && ComputerChoice === "paper")
  ) {
    humanScore++; // ✅ correct variable
    console.log(`You win! ${HumanChoice} beats ${ComputerChoice}`);
  } 
  else {
    computerScore++; // ✅ correct variable
    console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}`);
  }
  console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}
for(let i=0;i<5;i++){
  const humanSelection=getHumanChoice();
  const computerSelection=getComputerChoice();

  playRound(humanSelection,computerSelection);

  console.log(`Score is :`);
  console.log(`you: ${humanScore} , computer:${computerScore}`);
}
}
playGame();

