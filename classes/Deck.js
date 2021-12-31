"use strict";
exports.__esModule = true;
// import {colors} from 'colors';
var Card_1 = require("./Card");
var colors = require('colors');
// const Card = require( './Card' )
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = Deck.generateCards();
    }
    Deck.generateCards = function () {
        // const spades = Deck.cardNames.map( name => new Card( name, 'SPADE', color, Deck.values[name], Deck.symbols[suit], ) )
        // const clubs = Deck.cardNames.map( name => new Card( name, 'CLUB', Deck.generateColor( 'CLUB' ) ) )
        // const hearts = Deck.cardNames.map( name => new Card( name, 'HEART' ) )
        // const diamonds = Deck.cardNames.map( name => new Card( name, 'DIAMOND' ) )
        // const deck = [...spades, ...clubs, ...hearts, ...diamonds]
        var deck = [];
        for (var nameIndex = 0; nameIndex < Deck.cardNames.length; nameIndex++) {
            for (var suitIndex = 0; suitIndex < Deck.suits.length; suitIndex++) {
                var currentColor = Deck.generateColor(Deck.suits[suitIndex]);
                var name_1 = Deck.cardNames[nameIndex];
                var suit = Deck.suits[suitIndex];
                var value = Deck.values[name_1];
                var display = currentColor(name_1 + Deck.symbols[suit]);
                var config = {
                    name: name_1,
                    suit: suit,
                    value: value,
                    display: display
                };
                var card = new Card_1["default"](config);
                deck.push(card);
            }
        }
        return Deck.shuffle(deck);
    };
    Deck.shuffle = function (deck) {
        for (var i = 0; i < deck.length; i++) {
            for (var k = 0; k < deck.length; k++) {
                var rando = Math.floor(Math.random() * deck.length);
                var swap = deck[k];
                deck[k] = deck[rando];
                deck[rando] = swap;
            }
        }
        console.log(deck.length);
        return deck;
    };
    Deck.generateColor = function (suit) {
        // a switch statement, kinda like an if statement
        // basically takes an argument ( suit ) and based on the value
        // of the argument, performs several actions
        // in our case, it is returning a function "colors.bgWhite.red" if the argument is a string and
        // has a value that is equal to either 'HEART' or 'DIAMOND' or "colors.bgWhite.black" if the value is
        // a string with a value equal to 'SPADE' or 'CLUB'
        switch (suit) {
            case 'HEART':
            case 'DIAMOND':
                return colors.bgWhite.red;
            case 'SPADE':
            case 'CLUB':
                return colors.bgWhite.black;
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
    };
    Deck.cardNames = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
    // static cardSuits = {
    //     SPADE: 'SPADE',
    //     CLUB: 'CLUB',
    //     HEART: 'HEART',
    //     DIAMOND: 'DIAMOND',
    // }
    Deck.suits = [
        'SPADE',
        'CLUB',
        'HEART',
        'DIAMOND'
    ];
    Deck.symbols = {
        HEART: '\u2764',
        SPADE: '\u2660',
        DIAMOND: '\u2662',
        CLUB: '\u2663'
    };
    Deck.values = {
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
        2: 2
    };
    return Deck;
}());
var test = new Deck();
