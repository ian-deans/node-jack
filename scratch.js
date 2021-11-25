/**
 * blackjack
 * cards are made of suits and value
 * suits determine color and symbol
 * cards make up a deck
 * cards also make up a hand
 *
 * a card has: a suit, a value, a name
 *
 * a suit has: a color, a symbol
 *
 * a deck has: 52 cards
 *
 * a hand has: from 0 to 5 cards? has a bet attached to it,
 *
 * a game had a deck and a dealer
 *
 * a player has: a hand; a bank; a name;
 *
 *
 * game table? : has players, a dealer
 *
 *
 * classes: suit, card, deck, hand, player?
 *
 *
 * ? should the player object hold the hand object? or should the game table and the player simply bets or splits or doubles down?
 * ? thinking more along the lines of the hand being held by the table, in the case of a web based web socket type game, it would be a security
 * ? issue if the player held the hands, this would allow for a multiplayer feature because the players would just be sending commands rather
 * ? than holding data that they could potentially maniuplate
 *
 *
 * card concerns: needs to know its name and value ( the two not be the same ) as well as its suit
 *
 *
 * deck concerns: needs to have array of cards; be able to shuffle them; to be able to give a card off the "top"
 *
 *
 * hand concerns: generates a uid when created, maintains (0/1) to 5 cards, has a total value, has a bet, can be given funds to increase bet value, has a "bust" boolean triggered when value exceeds 21,
 *                  can be split and create a new hand, can be doubled down which takes an amount equal to the current bet and then can not accept anymore cards, (locked?)
 *
 *
 *
 * dealer concerns: maintains the deck, can deal a card from the deck, one at a time, to each player, has "house" funds and pays out to winning hands
 *                  ? might not even need the dealer... could all just be done from the table object and made to look like the dealer is there doing shit
 *
 * game table concerns: holds the players and the dealer, holds the hands,  determines winning hands and informs dealer?
 *                      ? the datastructure that holds the hands will have to be sorted to keep player turns in order, if a player splits, then that hand
 *                      ? needs to be inserted before the next players hands
 *
 * player concerns: is linked to a hand(s) on the game table through the hand's uid, can send "commands" to the dealer/table to perform actions on their hand(s)
 *
 *
 *
 */

const deck = require( './main' )

class UidGen {
    constructor() {
        this.next = 0
    }

    getID() {
        const id = this.next
        this.next++
        return id
    }
}

const uid = new UidGen()


class HandList {
    constructor() {
        this.baseHand = null
    }

    add( hand ) {
        if ( this.baseHand === null ) {
            return this.baseHand = hand
        }
        const tailHand = this.tail()
        tailHand.add( hand )
    }

    findById( id ) {

        function find( hand ) {
            if ( hand.data.id === id ) {
                return hand
            }

            return find( hand.next )
        }


        return find( this.baseHand )
    }

    insertAtID( id, hand ) {
        let start = this.findById( id )
        let swap = start.next
        const newhand = hand
        newhand.next = swap
        start.next = newhand
    }

    tail() {

        function findTail( hand ) {
            if ( hand.next != null ) {
                return findTail( hand.next )
            }

            return hand
        }

        const tail = findTail( this.baseHand )
        return tail
    }

    print() {
        this.hands.map( hand => hand.print() )
    }

    list() {

        let current = this.baseHand
        while ( current != null ) {
            current.print()
            current = current.next
        }
    }
}

// class hand {
//     constructor( data ) {
//         this.hand = data
//         this.next = null
//     }

//     add( nexthand ) {
//         this.next = nexthand
//     }

//     next() {
//         return this.next
//     }

//     print() {
//         console.log( this.hand )
//     }
// }

class Hand {
    constructor( card ) {
        this.id = uid.getID()
        this.cards = [card]
        this.value = 0
        this.bet = 0

        this.next = null
    }

    addCard( card ) {
        this.cards.push( card )

        let value = 0
        this.cards.forEach( card => value += card.value )
        this.value = value
    }

    addBet( amount ) {
        this.bet += amount
    }

    add( nextHand ) {
        this.next = nextHand
    }

    next() {
        return this.next
    }

    info() {
        const { id, value, bet, cards } = this
        return {
            id,
            value,
            bet,
            length: cards.length
        }
    }

    print() {
        this.cards.map( card => card.display() )
            .map( card => console.log( card ))
    }
}

const hands = new HandList()

// console.log( deck.unshift() )

// let test = deck.shift()
// 
// console.log( test )
hands.add( new Hand( deck.shift() ) )
hands.add( new Hand( deck.shift() ) )
hands.add( new Hand( deck.shift() ) )

console.log( hands.baseHand )

hands.list()