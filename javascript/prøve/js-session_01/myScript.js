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

console.log("/ ----------------------- /")
// LENGTH
const myString_1 = "Merhaba!";
console.log("length of myString_1: " + myString_1.length);
const myString_2 = ""
console.log("length of myString_2: " + myString_2.length);

// CONCAT
const myString_3 = "Serdar"
const myString_4 = "Durmus"
console.log("concat: " + myString_3.concat(" ".concat(myString_4)));
console.log("concat: " + myString_3.concat(" ", myString_4));

// CHAR-AT
console.log("");
console.log("// CHAR-AT");
const myString_5 = "SDs Firma"
console.log(myString_5.charAt(1)) // D
console.log(myString_5.charAt(17)) // ingen ting
console.log(myString_5.charAt(-1)) // ingen ting

// INCLUDES()
console.log("");
console.log("// INCLUDES()");
const myString_6 = "Hello friends, Welcome to Home"
console.log(myString_6.includes("to")) // True
console.log(myString_6.includes("To")) // False

// indexOf
console.log("");
console.log("// indexOf");
const myString_7 = "Hello friends, Welcome to Home"
console.log(myString_7.indexOf("ş")) // -1
console.log(myString_7.indexOf("to Hom")) // 23
console.log(myString_7.indexOf("t")) // 23

// REPLACE
console.log("");
console.log("// REPLACE");
const myString_8 = "Hello friends, Welcome to Home";
console.log(myString_8.replace("Hello", "Hi"));

// SEARCH (regex)
console.log("");
console.log("// SEARCH (regex - Regular Expressesions)");
const myString_9 = "Hello friends, Welcome to Home";
console.log(myString_9.indexOf("To Hom")) // key cencitive
console.log(myString_9.indexOf("to Hom")) // key cencitive
console.log(myString_9.search(/To Hom/i)) // i engelliyor key c'yi

// SLICE
console.log("");
console.log("// SLICE");
const myString_10 = "Hello friends, Welcome to Home";
console.log(myString_10.slice(2,5));
console.log(myString_10.slice(2));
console.log(myString_10.slice(-1));
console.log(myString_10.slice(-1,5)); // ingen ting

// SPLIT
console.log("");
console.log("// SPLIT");
const myString_11 = "Hello! friends, Welcome! to Home";
console.log(myString_11.split(" "))
console.log(myString_11.split(","))
console.log(myString_11.split("!"))

// SUBSTR() - SUBSTRING()
console.log("");
console.log("// SUBSTR() - SUBSTRING()");
const myString_12 = "Hello! friends, Welcome! to Home";
console.log(myString_12.slice(2,18)) // slice()
console.log(myString_12.substr(2,18)) // substr()  // 6dan başla 10 karakter al
console.log(myString_12.substring(2,18)) // substring() // 6 ile 10 arasındakini al, 6 dahil 10 dahil değil

// SUBSTR() - SUBSTRING() - SLICE()
console.log("");
console.log("// SUBSTR() - SUBSTRING() - SLICE()");
const myString_13 = "Hello! friends, Welcome! to Home";


// toLoweCase - toUpperCase
console.log("");
console.log("// toLoweCase - toUpperCase");
const myString_14 = "Hello! friends, Welcome! to Home";
console.log(myString_14.toLocaleLowerCase());
console.log(myString_14.toUpperCase());

// TRIM
console.log("");
console.log("// TRIM");
const myString_15 = "   Hello! friends, Welcome! to Home     ";
console.log(myString_15);
console.log(myString_15.trim());