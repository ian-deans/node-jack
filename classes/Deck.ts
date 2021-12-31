// import {colors} from 'colors';
import Card from './Card'

const colors = require( 'colors' )
// const Card = require( './Card' )

class Deck {
    cards: Card[]

    constructor () {
        this.cards = Deck.generateCards()
    }


    static generateCards (): Card[] {
        // const spades = Deck.cardNames.map( name => new Card( name, 'SPADE', color, Deck.values[name], Deck.symbols[suit], ) )
        // const clubs = Deck.cardNames.map( name => new Card( name, 'CLUB', Deck.generateColor( 'CLUB' ) ) )
        // const hearts = Deck.cardNames.map( name => new Card( name, 'HEART' ) )
        // const diamonds = Deck.cardNames.map( name => new Card( name, 'DIAMOND' ) )

        // const deck = [...spades, ...clubs, ...hearts, ...diamonds]

        const deck: Card[] = []

        for ( let nameIndex = 0; nameIndex < Deck.cardNames.length; nameIndex++ ) {
            for ( let suitIndex = 0; suitIndex < Deck.suits.length; suitIndex++ ) {
                const currentColor = Deck.generateColor( Deck.suits[ suitIndex ] )

                const name: string = Deck.cardNames[ nameIndex ]
                const suit: string = Deck.suits[ suitIndex ]
                const value: number = Deck.values[ name ]
                const display: string = currentColor( name + Deck.symbols[ suit ] )

                const config = {
                    name,
                    suit,
                    value,
                    display
                }

                const card = new Card( config )
                deck.push( card )
            }
        }

        return Deck.shuffle( deck )
    }

    static shuffle ( deck: Card[] ) {
        for ( let i = 0; i < deck.length; i++ ) {
            for ( let k = 0; k < deck.length; k++ ) {
                const rando = Math.floor( Math.random() * deck.length )

                let swap = deck[ k ]
                deck[ k ] = deck[ rando ]
                deck[ rando ] = swap
            }
        }
        return deck
    }

    static generateColor = suit => {
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

            // default: {

            //     //! might be a bad idea to use 'throw' to use it correctly we'd have to wrap shit in 'try{}catch{}' blocks and that sounds annoying...
            //     if ( typeof suit != 'string' ) {
            //         throw new Error( 'Invalid data type given. Must be a string.' )
            //     }

            //     if ( !Card.suits.includes( suit ) ) {
            //         throw new Error( 'String does match and valid suites.' )
            //     }
            // }

        }
    }

    static cardNames = [ 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2' ]
    // static cardSuits = {
    //     SPADE: 'SPADE',
    //     CLUB: 'CLUB',
    //     HEART: 'HEART',
    //     DIAMOND: 'DIAMOND',
    // }

    static suits = [
        'SPADE',
        'CLUB',
        'HEART',
        'DIAMOND'
    ]

    static symbols = {
        HEART: '\u2764',
        SPADE: '\u2660',
        DIAMOND: '\u2662',
        CLUB: '\u2663',
    }

    static values = {
        A: 11,
        K: 10,
        Q: 10,
        J: 10,
        10: 10,
        9: 9,
        8: 8,
        7: 7,
        6: 6,
        5: 5,
        4: 4,
        3: 3,
        2: 2,
    }
}

const test = new Deck()

Deck.shuffle