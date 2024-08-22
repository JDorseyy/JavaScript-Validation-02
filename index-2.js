function willMarryLate(firstName) {
    let nameLength = firstName.length;
    if(nameLength > 7) {
        return true;
    } else {
        return false;
    }
}

function willFallInLove(firstName) {
    let x = firstName.includes("i");
    if(x) {
        return true;
    } else {
        return false;
    }
}

function willBeRich(firstName) {
    let g = firstName.includes("R");
    if(g) {
        return true;
    } else {
        return false;
    }
}
function onceInALifeTime (firstName) {
    let nameLength = firstName.length;
    if(nameLength >= 5 && nameLength <= 7) {
        return true;
    } else {
        return false;
    }
}
function willMarryEarly (firstName) {
    let nameLength = firstName.length;
    if(nameLength > 5) {
        return true;
    } else {
        return false;
    }
}



function tellFortune(nameFirst) {
    let k = willMarryLate(nameFirst);
    if(k) {
        console.log(`${nameFirst} You will marry late.`)
    } else {
        console.log(`${nameFirst} You will not marry late.`)
    }
    let m = willMarryEarly(nameFirst);
    if(m) {
        console.log("You will marry early.");
    } else {
        console.log("You will not marry early.")
    }

    let s = willBeRich(nameFirst);
    if(s) {
    console.log("You will be rich!!!");
    } else {
    console.log("You will not be rich!");
    }
    let d = onceInALifeTime(nameFirst);
    if(d) {
    console.log("You will marry once in a lifetime.")
    } else {
    console.log("You will not marry at all.");
    }
    let f = willFallInLove(nameFirst);
    if(f) {
    console.log("You will fall in love.");
    } else {
    console.log("You will not fall in love.")
    }
}

let input1 = "Jamkia";
let input2 = "Shavonne";
let input3 = "Mariah";
let input4 = "Skylar";
let input5 = "Ronn";

tellFortune(input1);
tellFortune(input2);
tellFortune(input3);
tellFortune(input4);
tellFortune(input5);
