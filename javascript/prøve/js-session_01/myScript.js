/*
var myName = "Serdar";  // Vi trenger ikke å bruke ;
var myName = "Serdar2";
document.write("Hello world");
console.log(myName);

var a = 10;
{
    let b = 3;
    var c = 5;
}

console.log("a= " + a)
// console.log("b= " + b) // den er feil pga let
console.log("c= " + c) */


/* -------------------------------- */
/*
const x = 5;
x = 7;
{
    const y = 5;
}
console.log("x =" + x)
console.log("y =" + y)
*/

/* -------------------------------- */
var myNumber = 5 - 10;
console.log("myNumber: " + myNumber);

var myName = "Serdar";
console.log("myName: " + myName);


var myName = "Serdar " + 100 + " Nasılsın";
var myName2 = `Serdar ${100} Nasılsın`;  // Den er helt ny
console.log("myName: " + myName);
console.log("myName2: " + myName2);

const myBool1 = true
const myBool2 = 8>4
const myBool3 = 8 == "8"
const myBool4 = 7==="7"  // Vı kan bruke tre symboler
console.log(myBool1)
console.log(myBool2)
console.log(myBool3)
console.log(myBool4)

console.log("/ ----------------------- /")

const myVar_1 = Boolean("Hello")
const myVar_2 = Boolean("")
const myVar_3 = Boolean(0)
const myVar_4 = Boolean(-0)
const myVar_5 = Boolean(null)
console.log(myVar_1)
console.log(myVar_2)
console.log(myVar_3)
console.log(myVar_4)
console.log(myVar_5)

console.log("/ ----------------------- /")

console.log("typeof 0: " +"\t\t" + typeof 0)
console.log("typeof 10000000: " +"\t" +  typeof 10000000)
console.log("typeof 3.5: " + "\t" + typeof 3.5)
console.log("typeof Selamlar: " + typeof "Selamlar")
console.log("typeof Selamlar 105: " + typeof ("Selamlar " + 105))
console.log("typeof Selamlar 105: " + typeof "Selamlar " + 105)
console.log("typeof undefined: " + typeof undefined)
console.log("typeof undefined: " + typeof Boolean(undefined))
console.log("typeof 5>2: " + typeof 5>2)
console.log("typeof 5>2: " + typeof (5>2))

console.log("/ ----------------------- /")

const myValue_1 = 10;
const myValue_2 = "7";
const myValue_3 = true;
console.log(myValue_1+myValue_2)
console.log(typeof (myValue_1+myValue_2))
console.log(myValue_1-myValue_2)
console.log(typeof (myValue_1-myValue_2))
console.log(myValue_1*myValue_2)
console.log(typeof (myValue_1*myValue_2))
console.log(myValue_1/myValue_2)
console.log(typeof (myValue_1/myValue_2))
console.log(myValue_1+myValue_3)
console.log(typeof (myValue_1+myValue_3))