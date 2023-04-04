import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numberCollection = new NumbersCollection([4, -300, 110, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter);

const charactersCollection = new CharactersCollection('ZxYmba');
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(sorter1);
