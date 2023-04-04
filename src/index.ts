import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([4, -300, 110, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter);

const charactersCollection = new CharactersCollection('ZxYmba');
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(sorter1);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
const sorter2 = new Sorter(linkedList);
sorter2.sort();
linkedList.print();
