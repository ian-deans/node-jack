 colors = require( 'colors' )


const cardValues = {
    A: 11,
    K: 10,
    Q: 10,
    J: 10,
}

const symbols = {
    HEART: '\u2764',
    SPADE: '\u2660',
    DIAMOND: '\u2662',
    CLUB: '\u2663',
}

const generateColor = suit => {
    switch ( suit ) {
        case 'HEART':
        case 'DIAMOND':
            return colors.bgWhite.red;

        case 'SPADE':
        case 'CLUB':
            return colors.bgWhite.black
    }
}


class Card {
    constructor( name, suit ) {
        this.name = name
        this.suit = suit
        this.value = cardValues[ name ]
        this.symbol = symbols[ suit ]
        this.color = generateColor( suit )
    }

    display() {
        return this.color( this.name + this.symbol )
    }
}

class Ace extends Card {
    constructor( name, suit ) {
        super( name, suit )
    }

    reduceValue() {
        this.value = 1
    }
}

class Deck {
    constructor() {

    }
}

console.log( "wtf is trap?".trap)

const cardNames = [ 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2' ]
const cardSuits = [ 'SPADE', 'CLUB', 'HEART', 'DIAMOND' ]


// const deck = cardSuits.map( suit => cardNames.map( name => new Card( name, suit ) ) )

const spades = cardNames.map( name => name === 'A' ? new Ace( name, 'SPADE' ) : new Card( name, 'SPADE' ) )
const clubs = cardNames.map( name => name === 'A' ? new Ace( name, 'SPADE' ) :  new Card( name, 'CLUB' ) )
const hearts = cardNames.map( name =>name === 'A' ? new Ace( name, 'SPADE' ) :  new Card( name, 'HEART' ) )
const diamonds = cardNames.map( name =>name === 'A' ? new Ace( name, 'SPADE' ) :  new Card( name, 'DIAMOND' ) )

function* generation() {
    yield 'First'
    yield 'Second'
}

let test = generation()

console.log( test )
const deck = [ ...spades, ...clubs, ...hearts, ...diamonds ]

let deckDisplays = ''
deck.map( card => deckDisplays += `${card.display()} ` )

console.log( deckDisplays)

