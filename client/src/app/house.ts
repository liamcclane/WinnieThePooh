import { Item } from './item';
import { Character } from './character';

export class House {

    homeOwner: Character;
    itemSittingAtHouse: Item[];
    north: Character;
    south: Character;
    east: Character;
    west: Character;

}
