// ARRAY

// Flat array
{
    const myArray = ["Oslo", "Bergen", "Trondheim", 1,2,false];  
    console.log("myArray: ", myArray);
    console.log("length: ",myArray.length);
}
// concat
{
    const myArray = ["Oslo", "Bergen", "Trondheim", 1,2,false];  
    let myArray2 = ["Lier", "Drammen", "Asker"];
    const result = myArray.concat(myArray2);
    console.log(result);
}

// sort & push() & pop()
{
    const myArray = ["Oslo", 7, "Bergen", "Trondheim", 2,1,false]; 
    console.log(myArray);
    console.log(myArray.sort());
    console.log(myArray);
    myArray.push("Arendal");
    console.log(myArray);
    const result = myArray.pop();
    console.log(result);  // husk
    console.log(myArray);
}

// shift & unshift
{
    const myArray = ["Oslo", 7, "Bergen", "Trondheim", 2,1,false]; 
    const result = myArray.shift();
    console.log(result);  // husk
    console.log(myArray);
    const result2 = myArray.unshift("Oslo");
    console.log(result2);  // husk
    console.log(myArray);
}

// splice()

{
    const myArray = ["Oslo", 7, "Bergen", "Trondheim", 2,1,false]; 
    const result = myArray.splice(2,1); // det sletter et ord/number
    console.log(result);
    console.log(myArray);
    const result2 = myArray.splice(2,1,"hei hei"); // det sletter et ord/number
    console.log(result2);
    console.log(myArray);
}

// slice
{
    const myArrayy = ["Oslo", 7, "Bergen", "Trondheim", 2,1,false]; 
    const resultt = myArrayy.slice(1,4);
    console.log(resultt);
    console.log(myArrayy);
}


// indexof lastindexof
{
    const myArray = ["Serdar", "Durmus", "Serdar", "Lier","Serdar"    ]; 
    const searchIndex=myArray.indexOf("Serdar",2);  // det begynner number 2
    console.log(searchIndex);
    const searchLastIndex=myArray.lastIndexOf("Serdar");
    console.log(searchLastIndex);
}

// flat array
// array of array
// object of array