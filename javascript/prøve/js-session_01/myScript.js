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
let myFirstNumber = 10;
{
    let mySecondNumber = 5
    mySecondNumber = 100
    {
        console.log(“(NESTED SCOPE) myFirstNumber = ” + myFirstNumber);
        console.log(“(NESTED SCOPE) mySecondNumber = ” + mySecondNumber);
    }
    console.log(“mySecondNumber = ” + mySecondNumber);
}
console.log(“myFirstNumber = ” + myFirstNumber);