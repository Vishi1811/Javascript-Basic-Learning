let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessdslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const stratOver=document.querySelector('retultParas');

const p=document.createElement('p');
let preGuess=[];
let playGame=true;
let numGuess=1;
if(playGame)
{
  submit.addEventListener('click',function(e)
  {
    e.preventDefault();
    const guess=parseInt(userInput.value);
    validateGuess(guess);

  })

}
function validateGuess(guess)
{
  if(isNaN(guess) || guess<1 || guess>100)
  {
    alert('Please enter a valid number')
  }
  else{
    preGuess.push(guess);
    if(numGuess>10)
    {
      
    }
}
function checkGuess(guess)
{

}
function displayMessage(message)
{

}
function displayGuess(guess)
{

}
function endGame()
{

}
function newGame()
{

}