
let score = JSON.parse(localStorage.getItem(`score`));

if ( score === null){
  score = {
  wins: 0,
  lose: 0,
  tie: 0

  }
}
 
updateScoreElement();

 
  let result = '';

function playGame(playerMove) {
  
  const computerMove = pickComputerMove ()


  if (playerMove === `rock`){


    if (computerMove === `rock`) {
       result= `tie`
  }else if (computerMove === `paper`) {
        result = `You lose`
  }else if ( computerMove === `scissors`){
       result = `You win`
  } 
  
  
}else if ( computerMove === `paper` ) {

  const computerMove = pickComputerMove ();

if (computerMove === `rock`) {
  result= `You lose`;
}else if (computerMove === `paper`) { 
  result = `tie`;
}else if ( computerMove === `scissors`){
  result = `You lose`;
}


}else if ( playerMove === `scissors`) {
  
 const computerMove = pickComputerMove ();

  if (computerMove === `rock`) {
    result= `You lose`
  }else if (computerMove === `paper`) {
    result = `You win`
  }else if ( computerMove === `scissors`){
    result = `tie`
  }



}
if (result === `You win`){
  score.wins += 1;
}
else if (result === `You lose`) {
  score.lose += 1;

}
else if (result === `tie`) {
  score.tie += 1;

} 

localStorage.setItem(`score`, JSON.stringify(score));

updateScoreElement();


 document.querySelector(`.js-result`).innerHTML = result;
 document.querySelector(`.js-move`).innerHTML = `You ${playerMove}. ${computerMove} computer`;


}

  function updateScoreElement(){
    document.querySelector(`.js-score`)
.innerHTML =  `You win: ${score.wins}, You loss: ${score.lose} ties: ${score.tie}`;
  
}


 function pickComputerMove () {

const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = `rock`;
}else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = `paper`;
}else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = `scissors`;
}



return computerMove;

}