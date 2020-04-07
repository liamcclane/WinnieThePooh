import { House } from './house';
import { Item } from './item';
import { Character } from './character';

export class Player {
    location: House;
    holdingItems: Item[];
    health: number;
    completedCharacters: Character[];

    constructor(
        location: House
    ) {
        this.location = location
    }

    /**
     * 
     */
    printCompletedCharactersNames(){
        let arr = [];
        for(let c of this.completedCharacters) {
            arr.push(c.name);
        }
        console.log(arr);
    }

}
