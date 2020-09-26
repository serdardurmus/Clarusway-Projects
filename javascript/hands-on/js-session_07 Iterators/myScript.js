// Iterators

{ // foreach Geriye değer dönmüyor
    const numbers = [1, 3, 6, 7, 33, 2, 4, 10];

    //Arrow
    numbers.forEach((number, index) => {
        console.log("number:", number, "\tindex:", index);
    });

    // regular

    numbers.forEach(logNumbers);
    function logNumbers(number) {
        console.log("number:", number);
    }
}

// -----------------------------------------------
console.log("");
console.log("map:");
{  // map()  Geriye değer dönüyor
    const numbers = [1, 3, 6, 7, 33, 2, 4, 10];

    const newNumbers = numbers.map(num => {
        // console.log("num:", num)
        return num * 2
    })

    console.log(newNumbers)
}

// -----------------------------------------------
console.log("");
console.log("map and forEach:");
{  // map and forEach
    const numbers = [1, 3, 6, 7, 33, 2, 4, 10];

    const num_1 = numbers.forEach((num) => console.log(num))
    const num_2 = numbers.map((num) => console.log(num))

    console.log(num_1);
    console.log(num_2);
}


// -----------------------------------------------
console.log("");
console.log("Find:");
// find
// Bir koşul sağlamak zorundayız, tam olarak aradığımız şeyi belirtmemiz gerekiyor
// İlk bulduğunu getiriyor
{
    const users = [
        { id: 0, name: "Jack", age: 20 },
        { id: 1, name: "Milton", age: 34 },
        { id: 2, name: "Arthur", age: 40 },
        { id: 3, name: "Mercedes", age: 10 },
        { id: 4, name: "David", age: 34 }
    ];

    const myUser = users.find(user => user.age == 34);
    console.log(myUser);
    const myUser2 = users.find(user => user.age < 40);
    console.log(myUser2);
}

// -----------------------------------------------
console.log("");
console.log("Filter:");
// filter
{
    const users = [
        { id: 0, name: "Jack", age: 20 },
        { id: 1, name: "Milton", age: 34 },
        { id: 2, name: "Arthur", age: 40 },
        { id: 3, name: "Mercedes", age: 10 },
        { id: 4, name: "David", age: 34 }
    ];
    const myUser1 = users.filter(user => user.age < 40);
    console.log(myUser1);
}

// -----------------------------------------------
console.log("");
console.log("Reduce:");
// Reduce
// acc: son yapılan return işlemini tutuyor
// curr: şu andaki pozisyonun değerini veriyor

{
    const myArray = [1, 3, 15, 6, 8];
    const max = myArray.reduce((acc, curr) => {
        // console.log("acc:", acc, "curr:", curr);
        if (acc < curr) { return curr } else { return acc }
    });

    console.log("max:", max)
}

{
    const myArray = [1, 3, 15, 6, 8];

    const max = myArray.reduce((acc, curr) => {
        return acc > curr ? acc : curr;
    });
    console.log("max:", max)
}


// -----------------------------------------------
console.log("");
console.log("every and some:");
// every - hepsi için sağlanması lazım sonra true döner
// some - en az biri sağlasa da olur, sonra true döner

{
    const users = [
        { id: 0, isOld: false, name: "Jack", age: 20 },
        { id: 1, isOld: true, name: "Milton", age: 34 },
        { id: 2, isOld: true, name: "Arthur", age: 40 },
        { id: 3, isOld: false, name: "Mercedes", age: 10 },
        { id: 4, isOld: true, name: "David", age: 34 }
    ];

    console.log("every: ", users.every(user => user.isOld === true));
    console.log("some: ", users.some(user => user.isOld === true));
}

// -----------------------------------------------
console.log("");
console.log("for-in and for-of:");
// for-in - 
// for-of - 

{
    const users2 = { 
        id: 0, 
        isOld: false, 
        name: "Jack", 
        age: 20 };
    for (key in users2) {
        console.log("key:",key);
        console.log("value:",users2[key]);
    }


    const users = [
        { id: 0, isOld: false, name: "Jack", age: 20 },
        { id: 1, isOld: true, name: "Milton", age: 34 },
        { id: 2, isOld: true, name: "Arthur", age: 40 },
        { id: 3, isOld: false, name: "Mercedes", age: 10 },
        { id: 4, isOld: true, name: "David", age: 34 }
    ];

    for (element of users) {
        console.log(element);
    }
}
 // nested kan vi bruke.
{
    const users = [
        { id: 0, isOld: false, name: "Jack", age: 20 },
        { id: 1, isOld: true, name: "Milton", age: 34 },
        { id: 2, isOld: true, name: "Arthur", age: 40 },
        { id: 3, isOld: false, name: "Mercedes", age: 10 },
        { id: 4, isOld: true, name: "David", age: 34 }
    ];

    for (element of users) {
        for (key in element) {
            console.log("key:",key);
            console.log("value:",element[key]);
        }
    }
}