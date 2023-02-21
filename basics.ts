//Basic types
let userName: string = "Miskiat";
let hasLoggedIn: boolean = true;

userName += " Badmus";

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

//Array types
const names: string[] = userName.split(" ");
//Generic Array types
const myValues: Array<number> = [2, 3, 4];
//Object types
interface Person {
  first: string;
  last: string;
}
const myPerson: Person = {
  first: "Miskiat",
  last: "Badmus",
};
//objects as maps
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

//Conditionals and Expressions
if ((ids[30] = "D")) {
}
//Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const out: number[] = [4, 5, 6].map((v) => v * 10);
