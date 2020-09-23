
document.getElementById("submit_btn").addEventListener("click", submitUser);
document.getElementById("list_btn").addEventListener("click", listUsers);

class User {
    constructor(userName, userSurname, userAge) {
        this.name = userName;
        this.surname = userSurname;
        this.age = userAge;
    }

    login() {
        console.log(this.name, this.surname);
    }
}

const userList = [];

function submitUser() {
    const name = document.getElementById("name_inp").value;
    const surname = document.getElementById("surname_inp").value;
    const age = document.getElementById("age_inp").value;

    const user = new User(name, surname, age);

    userList.push(user);
}

function listUsers() {
    console.log(userList);
    userList[1].login();
}