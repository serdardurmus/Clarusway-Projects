const num_1 = 3;
const num_2 = 4;

console.log("ADD: ", num_1+num_2);
console.log("SUB: ", num_1-num_2);
console.log("MULT: ", num_1*num_2);
console.log("DIV: ", num_1/num_2);
console.log("MOD: ", num_1%num_2);
console.log("EXP: ", num_1**num_2);
console.log("");

const result1 = 5 + "6"; // 56
console.log("Result: ", result1, "Type:", typeof result1);
const result2 = 5 + "6" - 1; // 55
console.log("Result: ", result2, "Type:", typeof result2);
const result3 = 5 + "6" * 1; // 11
console.log("Result: ", result3, "Type:", typeof result3);
const result4 = 5 + "6" / 1; // 11
console.log("Result: ", result4, "Type:", typeof result4);

/* ------------------------------------ */
console.log("/* ------------------------------------ */");
console.log(3>"2");  // true
console.log("3">"2");  // true
console.log(3>2);  // true
console.log(3>"a");  // false
console.log(333>"a");  // false

/* ------------------------------------ */
console.log("/* ------------------------------------ */");
const myNymber1 = 10;
const myNymber2 = 8;
console.log(myNymber1 == 10 && myNymber2 == 8);  //true
console.log(myNymber1 == 9 && myNymber2 == 8);  //false
console.log(myNymber1 == 9 || myNymber2 == 8);  //true
console.log(myNymber1 == 9 || myNymber2 == 7);  //false
console.log(myNymber1 == 9 || myNymber2 == "8");  //true
console.log(!(myNymber1 == 9 || myNymber2 == "8"));  //false
console.log("");
console.log(!1);  //false
console.log(0 && true);  //0
console.log(5 && true);  //true
console.log("Hei" && true);  //true
console.log("" && true);  // ingen ting (space)
console.log("" || true);  //true
