// OBJECT

{
    const user = {
        name: "Ezran",
        surname: "Rassmussen",
        age: 30,
        isMember: true
    }
    
    //console.log(user);
    console.log(user.surname);
    console.log(user["surname"])
    
    const name2 ="surname";
    console.log(user[name2]);
    
}


// JSON - Javascript Object Notation
{
    const phone = {
        "camera" : 12,
        "model": "MI T9",
        "memory" : "8 GB",
        "price": 4000
    }
}

// function in object
{
    const user = {
        userName: "cilginCocuk",
        userPass: "ABC123",
        age: 15,
        loginUser() {
            console.log("User logged in")
        },
        loginPass: function () {
            console.log("User pass is correct")
        }
    }
    // console.log(user);
    user.loginUser();
    user.loginPass();
}

