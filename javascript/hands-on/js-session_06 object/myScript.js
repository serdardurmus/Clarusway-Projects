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

    const name2 = "surname";
    console.log(user[name2]);

}


// JSON - Javascript Object Notation
{
    const phone = {
        "camera": 12,
        "model": "MI T9",
        "memory": "8 GB",
        "price": 4000
    }
}

console.log("");
// function in object
{
    const user = {
        userName: "Batman",
        userPass: "ABC123",
        age: 15,
        loginUser() {
            let userName = "Superman"
            console.log(this.userName + " logged in") // Batman logged in
            console.log(userName + " logged in") // Superman logged in
        },
        loginPass: function () {
            console.log("User pass is correct")
        },
        setNickName (nick) {
            console.log(this.userName + " changing nickname to: " + nick);
        }
    }
    // console.log(user);
    user.loginUser();
    user.loginPass();
    user.setNickName("Hulk")
}


console.log("");
{
    let newDate = new Date();
    console.log(newDate);
    console.log(typeof newDate);
}


// array of object
// Det er feil på en måte
console.log("");
{
    const user = {
        userName: "Batman",
        userPass: "ABC123",
        age: 15,
        loginUser() {
            let userName = "Superman"
            console.log(this.userName + " logged in") // Batman logged in
            console.log(userName + " logged in") // Superman logged in
        },
        loginPass: function () {
            console.log("User pass is correct")
        },
        setNickName (nick) {
            console.log(this.userName + " changing nickname to: " + nick);
        }
    }


    const userArray = [];

    const myUser_1 = user;
    myUser_1.userName = "Ayşe";
    myUser_1.userPass = "123cba"
    myUser_1.age = 20;

    const myUser_2 = user;
    myUser_2.userName = "Ahmet";
    myUser_2.userPass = "1234cba"
    myUser_2.age = 20;

    userArray.push(myUser_1)
    userArray.push(myUser_2)
    console.log(userArray)
}


// array of object
// Det er sant, det brukes class
console.log("");
console.log("array of object");
console.log("");
{
    const user = {
        userName: "Batman",
        userPass: "ABC123",
        age: 15,
        loginUser() {
            let userName = "Superman"
            console.log(this.userName + " logged in") // Batman logged in
            console.log(userName + " logged in") // Superman logged in
        },
        loginPass: function () {
            console.log("User pass is correct")
        },
        setNickName (nick) {
            console.log(this.userName + " changing nickname to: " + nick);
        }
    }
    class User {
        constructor(name, password, age) {
            this.userName = name;
            this.userPassword = password;
            this.userAge = age;
        }
    }
    const myUser1 = new User("Albert", "EMC2", 25);
    const myUser2 = new User("Thomas", "tEsla", 35);
    console.log(myUser1);
    console.log(myUser2);
}


// array of object 2
// Det er sant
console.log("");
console.log("array of object");
console.log("");
{
    const user = {
        userName: "Batman",
        userPass: "ABC123",
        age: 15,
        loginUser() {
            let userName = "Superman"
            console.log(this.userName + " logged in") // Batman logged in
            console.log(userName + " logged in") // Superman logged in
        },
        loginPass: function () {
            console.log("User pass is correct")
        },
        setNickName (nick) {
            console.log(this.userName + " changing nickname to: " + nick);
        }
    }
    class User {
        constructor(param) {
            this.userName = param.name;
            this.userPassword = param.password;
            this.userAge = param.age;
        }
        login() {
            console.log(this.userName + " logged in");
        }
    }
    const myUser1 = new User({name:"Albert", password:"EMC2", age:25});
    const myUser2 = new User({name:"Thomas", password:"tesla", age:35});
    console.log(myUser1);
    console.log(myUser2);

    myUser1.login();
    myUser2.login();
}