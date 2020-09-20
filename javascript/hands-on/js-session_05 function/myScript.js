{
    const myNumber_1 = 9;
    const myNumber_2 = 10;

    function sumNumbers () {
        const result =myNumber_1 + myNumber_2
        return result;
        const abc= 9;
    }

    const res = sumNumbers();
    console.log(res);
}
// -------------------------------------------------------
{
    let myNumber_1 = "Hei";
    let myNumber_2 = "Jeg er Serdar";

    function upperWords() {
        myNumber_1 = myNumber_1.toUpperCase();
        myNumber_2 = myNumber_2.toUpperCase();
    }
    upperWords();
    console.log(myNumber_1, myNumber_2);
}

// -------------------------------------------------------

{
    function checkNumbers() {
        for (let i=0; i<10; i++) {
            if (i===5) {
                // return; // vi går ut function
                break;  // Vi går ut loop
            }
            console.log("i: ", i)
        }
        console.log("END");
    }
    checkNumbers();
}

// -------------------------------------------------------
// Regular functions
{
    function myFunction_1 () {
        console.log("myFunction_1");
    }
    myFunction_1();
}
// Function Expression
{
    const myFunction_2 = function() {
        console.log(arguments)
        console.log("myFunction_2");
    }
    myFunction_2();
}

// Arrow Functions () => {}
{
    const myFunction_3 = () => {
        console.log("myFunction_3")
    }
    myFunction_3();
}
{
    const myFunction_3 = (p1) => {
        console.log("myFunction_3", p1)
    }
    myFunction_3("Best");
}
{
    const myFunction_3 = p1 => p1 **2  // Tek satırda {} ihtiyaç yok
    console.log(myFunction_3(6));
}

{
    const myFunction_3 = p1 => { return p1 **2 }  // return yapmazsak undefined verir
    console.log(myFunction_3(6));
}

//? Vi bruker skjelden den
//? IIFE (Immediately Invobale Function Expressions)
{
    (function(p1, p2){
        console.log("IIFE!" , p1, p2)
    })(10,20);
}
{
    ((p1, p2) => {
        console.log("IIFE_2!" , p1, p2)
    })(10,20);
}

// callback
{
    let myArray = [6,7,11,2,123,3,55];
    myArray.sort(function (a,b){
        return b - a});
    console.log(myArray);
}
{
    let myArray = [6,7,11,2,123,3,55];
    myArray.sort(function (a,b){
        return a-b});
    console.log(myArray);
}
{
    let myArray = [6, 7, 11, 2, 123, 3, 55];
    function sortElements_1(a, b) {
        return a - b;
    }
    const sortElements_2 = (a, b) => a - b;
    const num1 = myArray.sort(function (a, b) { return a - b });
    const num2 = myArray.sort((a, b) => a - b);
    const num3 = myArray.sort(sortElements_1);
    const num4 = myArray.sort(sortElements_2);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
}