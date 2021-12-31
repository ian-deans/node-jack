
export default class Card {
    name: string
    suit: string
    value: number
    display: string

    constructor( { name, suit, value, display } ) {
        this.name = name;
        this.suit = suit;
        this.value = value;
        this.display = display
    }

}
