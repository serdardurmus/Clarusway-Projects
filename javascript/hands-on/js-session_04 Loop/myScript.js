// FOR LOOPS
let sum = 0;
for (let i = 0; i<=5; i += 2) {
    console.log("i: ", i);
    sum +=i;
}
console.log(sum);

let myString = "Serdar";
for (let i=0; i<myString.length; i++) {
    // console.log(myString[i]);
    console.log(`${i + 1}.inci harf ${myString[i]}`)
}

// WHILE LOOPS
{
let i = 0;
while(i<5) {
    console.log(i);
    i++;
}
}

{
    let i = 0, sum=0;
while(i<5) {
    sum += i;
    i++;
}
console.log("Sum: ",sum);
}

// DO..WHILE LOOPS
{
    console.log("Do While Code:")
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i>5);
}

// BREAK & CONTINIUE
{
    console.log("BREAK & CONTINIUE:")
    for (let i = 0; i<10; i++) {
        if (i===4) continue;
        if (i===8) break;
        console.log(i);
    }
}

{
    let myString = "Serdar", result = "";
    for (let i = 0; i<myString.length; i++) {
        if(myString[i] ==="e") continue;
        if(myString[i] ==="f") break;
        result += myString[i]
    }
    console.log(result);
}


// forEach
{
    const myArray = ["Serdar", "Durmus", "Serdar", "Lier","Serdar"    ]; 
    array.forEach(element => {
        console.log(element);
    });
}