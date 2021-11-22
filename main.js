 colors = require( 'colors' )

 /**
  * ? this is all just me fucking around and testing shit out. no logic or anything just figuring out data structure
  */

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

const cardNames = [ 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2' ]
const cardSuits = [ 'SPADE', 'CLUB', 'HEART', 'DIAMOND' ]



const generateColor = suit => {
    // a switch statement, kinda like an if statement
    // basically takes an argument ( suit ) and based on the value
    // of the argument, performs several actions
    
    // in our case, it is returning a function "colors.bgWhite.red" if the argument is a string and
    // has a value that is equal to either 'HEART' or 'DIAMOND' or "colors.bgWhite.black" if the value is
    // a string with a value equal to 'SPADE' or 'CLUB'
    switch ( suit ) {
        case 'HEART':
        case 'DIAMOND':
            return colors.bgWhite.red;

        case 'SPADE':
        case 'CLUB':
            return colors.bgWhite.black

        default: {

            //! might be a bad idea to use 'throw' to use it correctly we'd have to wrap shit in 'try{}catch{}' blocks and that sounds annoying...
            if ( typeof suit != 'string' ) {
                throw new Error('Invalid data type given. Must be a string.')
            }

            if ( !cardSuits.includes( suit ) ) {
                throw new Error('String does match and valid suites.')
            }
        }
            
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





// const deck = cardSuits.map( suit => cardNames.map( name => new Card( name, suit ) ) )

const spades = cardNames.map( name => name === 'A' ? new Ace( name, 'SPADE' ) : new Card( name, 'SPADE' ) )
const clubs = cardNames.map( name => name === 'A' ? new Ace( name, 'SPADE' ) :  new Card( name, 'CLUB' ) )
const hearts = cardNames.map( name =>name === 'A' ? new Ace( name, 'SPADE' ) :  new Card( name, 'HEART' ) )
const diamonds = cardNames.map( name =>name === 'A' ? new Ace( name, 'SPADE' ) :  new Card( name, 'DIAMOND' ) )

const deck = [ ...spades, ...clubs, ...hearts, ...diamonds ]

let deckDisplays = deck.map( card => card.display() + " " ).join("")

console.log( deckDisplays)

