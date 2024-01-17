const headsButton = document.querySelector('#heads');
const tailsButton = document.querySelector('#tails');
const coinImage = document.querySelector('#coinImage');
const results = document.querySelector('#coinTossResults');
const scoreText = document.querySelector('#score');

let winCounter = 0;
let lossCounter = 0;

const flip = () => {
    let random = Math.floor(Math.random()*2);
    if (random === 0){
        return 'Heads';
    } else {
        return 'Tails';
    }
}

const coinFlip = guess => {
    let result = flip();
    coinImage.src = result === 'Heads' ? 'imgs/heads.jpg' : 'imgs/tails.jpg';
    let winText = result === guess ? 'You chose wisely' : 'Sorry, wrong choice';

    let outputText = `You chose ${guess}<br> The toss is ${result}<br>${winText}`;

    results.innerHTML = outputText;

    if(result === guess){
        winCounter ++;
    } else {
        lossCounter ++;
    }
    
    scoreText.textContent = `Wins = ${winCounter}     Losses = ${lossCounter}`;
};






headsButton.addEventListener('click', () => {
    coinFlip('Heads');
});

tailsButton.addEventListener('click', () => {
    coinFlip('Tails');
});