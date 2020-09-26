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
        return num*2
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
        {id:0, name:"Jack", age:20},
        {id:1, name:"Milton", age:34},
        {id:2, name:"Arthur", age:40},
        {id:3, name:"Mercedes", age:10},
        {id:4, name:"David", age:34}
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
        {id:0, name:"Jack", age:20},
        {id:1, name:"Milton", age:34},
        {id:2, name:"Arthur", age:40},
        {id:3, name:"Mercedes", age:10},
        {id:4, name:"David", age:34}
    ];
    const myUser1 = users.filter(user => user.age < 40);
    console.log(myUser1);
}

