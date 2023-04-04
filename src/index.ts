import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberCollection = new NumbersCollection([4, -300, 110, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter);
