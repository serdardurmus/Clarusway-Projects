const random_number = Math.ceil(Math.random()*100)
let counter = 0

function getNumber() {
    let myNumber = document.querySelector("#inp").value;
    if (myNumber < 0 || myNumber>100 ) {
        document.querySelector('#result').innerHTML='Please enter a number between 0 and 100';
    } else {
        checkNumber(myNumber);
    }
}

function checkNumber(myNumber) {
    counter = counter + 1;
    if (myNumber > random_number) {
        document.querySelector('#result').innerHTML=`Write a number less than ${myNumber}`;
        document.querySelector('#inp').value ="";
    } else if (myNumber < random_number) {
        document.querySelector('#result').innerHTML=`Write a number greater than ${myNumber}`;
        document.querySelector('#inp').value ="";
    }else {
        feedback();
    }
}

function getRandom() {
    let lucky_number = Math.ceil(Math.random()*100);
    document.querySelector('#inp').value =lucky_number;
    checkNumber_lucky(lucky_number);
}
function checkNumber_lucky(lucky_number) {
    counter = counter + 1;
    if (lucky_number > random_number) {
        document.querySelector('#result').innerHTML=`${lucky_number} did not bring you luck. Try again or write a number.`;
    } else if (lucky_number < random_number) {
        document.querySelector('#result').innerHTML=`${lucky_number} did not bring you luck. Try again or write a number.`;
    }else {
        feedback();
    }
}

function feedback() {
    alert(`${counter}. denemede buldun, tebrikler :) `);
    var txt;
    var r = confirm("Tekrar oynayalım mı?");
    if (r == true) {
        location.reload();
    } else {
        alert("OK! Görüşürüz öyleyse");
        window.close();
    }
    
}