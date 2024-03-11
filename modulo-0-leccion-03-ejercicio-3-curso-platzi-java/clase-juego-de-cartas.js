// Exercise: Card Game Implementation

const deck = ['1♠', '1♥', '1♦', '1♣', '2♠', '2♥', '2♦', '2♣','3♠', '3♥', '3♦', '3♣','4♠', '4♥', '4♦', '4♣', '5♠', '5♥', '5♦', '5♣','6♠', '6♥', '6♦', '6♣', '7♠', '7♥', '7♦', '7♣', 'J♠', 'J♥', 'J♦', 'J♣', 'Q♠', 'Q♥', 'Q♦', 'Q♣','K♠', 'K♥', 'K♦', 'K♣',]

// Fisher-Yates Algorithm
function shuffleDeck () {
    for (let i = deck.length - 1; i > 0; i--) {
        const j =Math.floor(Math.random() * (i + 1)); // numero entero(numero aleatorio pero que incluya el primer valor)
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

function dealCards (numCard) {
    const dealtCards = deck.splice(0, numCard)
    return dealtCards
}

shuffleDeck()

const player1Hand = dealCards(3)
const player2Hand = dealCards(3)
const player3Hand = dealCards(3)

console.log('Player 1 Hand: ', player1Hand)
console.log('Player 2 Hand: ', player2Hand)
console.log('Player 3 Hand: ', player3Hand)