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
 * hand concerns: maintains (0/1) to 5 cards, has a total value, has a bet, can be given funds to increase bet value, has a "bust" boolean triggered when value exceeds 21,
 *                  can be split and create a new hand, can be doubled down which takes an amount equal to the current bet and then can not accept anymore cards, (locked?)
 * 
 * 
 * dealer concerns: maintains the deck, can deal a card from the deck, one at a time, to each player, has "house" funds and pays out to winning hands
 * 
 * 
 * game table concerns: holds the players and the dealer,  determines winning hands and informs dealer?
 * 
 * 
 * player concerns: is linked to a hand(s) on the game table, can send "commands" to the dealer/table to perform actions on their hand(s)
 * 
 * 
 * 
 */