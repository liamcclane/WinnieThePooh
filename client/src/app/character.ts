import { Item } from './item';
import { Player } from './player';

export class Character {

    name: string;
    itemNeed: Item;
    catchPhrase: string;
    hasItem: boolean;

    /**
     * 
     * @param name 
     * @param itemNeed 
     * @param catchPhrase 
     */
    constructor(
        name: string,
        itemNeed: Item,
        catchPhrase: string
    ) {
        this.name = name;
        this.itemNeed = itemNeed;
        this.catchPhrase = catchPhrase;
        this.hasItem = false;
    }

    /**
     * 
     */
    greetPlayer() {
        console.log(`${this.name} says Hello! I need my ${this.itemNeed}, please`);
    }
    /**
     *
     */
    giveToPlayer(p1: Player) {

    }
    /**
     * 
     */
    receiveItem(item: Item, p1: Player) {
        if (item === this.itemNeed) {
            console.log("Success!");
            console.log(`gave ${item} to ${this.name} and they needed ${this.itemNeed} :)`);
            this.hasItem = true;
            p1.completedCharacters.push(this);
            console.log(`now here are all the character your have helped`);
            p1.printCompletedCharactersNames();
            return
        }
        console.log("Wrong!");
        console.log(`gave ${item} to ${this.name} and they needed ${this.itemNeed}`);
    }
    /**
     * 
     */
    hurtPlayer(p1: Player) {

    }
    /**
     * 
     */

}
