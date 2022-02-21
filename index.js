let player = {
    name: "Victor",
    balance: 100
};
let allCards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") // querySelector("#sum-el") can also be used
let cardEl = document.getElementById("cards-el")
let message = ""
let nameBalanceEl = document.getElementById("name-balance-el")

nameBalanceEl.textContent = player.name + ": $" + player.balance

function startGame () {
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard()
    allCards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true;
    renderGame();
};

function renderGame() {
    if (sum < 21) {
        isAlive = true
        hasBlackjack = false
        console.log(sum)
        message = "Do you want to keep going?"
    } else if (sum === 21) {
        isAlive = true
        hasBlackjack = true
        console.log(sum)
        message = "You got 21!"
    } else {
        isAlive = false
        hasBlackjack = false
        console.log(sum)
        message = "Total is over 21, you lose!"
    }
    messageEl.textContent = message; // Does't need to be in side of the the if/else block
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: ";

    for (let i = 0; i < allCards.length; i++) {
        cardEl.textContent += allCards[i] + " ";
    };

};

function newCard() {
    if (allCards.length != 0 && isAlive){
        let nextCard = getRandomCard()
        sum += nextCard
        allCards.push(nextCard)
        console.log(allCards)
        renderGame() // renderGame function is called inside of the newCard function. After newCard logic is done.
    }
};

function getRandomCard() { 
    let rand = Math.floor(Math.random()* 13) + 1 // random number 1 - 13
    if (rand > 10) {
        return 10
    } else if (rand === 1) {
        return 11
    } else {
        return rand
    };
};