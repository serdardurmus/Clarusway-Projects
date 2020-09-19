
// CONDITIONAL
let myValue_1 = 5;

if  (myValue_1 === 5) {
    let myNumber = 100;
    console.log("Value 5", myNumber);
} else if  (myValue_1 === 8) {
    console.log("Value 8");
} else { 
    console.log("Hva sjedde?");
    console.warn("Hva sjedde?");
    console.error("Hva sjedde?");
}

// console.log(myNumber);  // not defined

/* ------------------------------------ */
console.log("");
console.log("/* ------------------------------- */");
const score = 60;

if (score<20) {
    console.log("BAD");
} else {
    if (score<50) {
        console.log("NOT BAD")
    } else {console.log("GOOD")}
}

/* Swich Case */
console.log("");
console.log("/* ------------------------------- */");

const userType ="Employee";
switch(userType) {
    case "admin":
        console.log("Welcome to Admin Panel");
        break;
    case "Employee":
        console.log("Welcome to Employee Section");
        break;
    case "Customer":
        console.log("Welcome to Menu");
        break;
    default:
        console.log("Who are you?");
        break;
}

/* Ternary operator */
console.log("");
console.log("/* ------------------------------- */");
const number = 55;
if (number<50) {
    console.log("BAD");
} else { console.log("GOOD");}

number < 50 ? console.log("BAD") : console.log("GOOD")

const result = number < 50 ? "BAD" : "GOOD"
console.log(result)

/* NULLISH OPR */
console.log("");
console.log("/* ------------------------------- */");

const myVariable = 70;
const sann = myVariable != null ? myVariable : 80;
const sann2 = myVariable ?? 80;  /* NULLISH OPR */
console.log(sann);
console.log(sann2);