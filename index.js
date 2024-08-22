// fortune telling
// takes your name as input
// out puts your fortune
// name is longer than 7 charcters: "will marry late in life"
// name shorter than 5 charcters: "will marry within a year"
// name is between 5 and 7 charcters: "will encounter a oppurtunity"
// first letter is "R": "will be rich"
// name contains an "i":"will fall in love this week"
let myName;
myName = "Jamkia";

let lengthOfmyName = myName.length;
console.log(lengthOfmyName);


if (lengthOfmyName < 5) {
    console.log("You will marry late in life!");
}

if (lengthOfmyName > 5) {
    console.log("You will marry within a year!");
}

if (lengthOfmyName >=5 && lengthOfmyName <= 7) {
    console.log ("You will encounter a once-in-a-lifetime oppurtunity")
}
let firstCharcter = myName[0];
 console.log(firstCharcter);
if(firstCharcter === "R") {
    console.log("You will be rich!");
}

if (myName.includes ("i")) {
    console.log ("will fall in love this week")
}

