// DOM

//document.getElement ...
// ID
const element1 = document.getElementById("user_name");
console.log(element1);

// CLASS
const element2 = document.getElementsByClassName("userTag");
console.log(element2);

// TAG
const element3 = document.getElementsByTagName("p");
console.log(element3);

// document.querySellector ... // anbefales
// Id
const element4 = document.querySelector("#user_name"); // ilkini buldu getirdi
console.log(element4)

// Class
const element5 = document.querySelectorAll(".userTag");
console.log(element5)

// TAG
const element6 = document.querySelectorAll("p");
console.log(element6)

// ----------------------------------------

const element7 = document.getElementsByClassName("userTag");
const element8 = document.querySelectorAll(".userTag");

console.log(element7);  // HTMLCollection
console.log(element8); // NodeList


// -----------------------------------
const list= document.querySelector("#city_list");

const elements_1 = document.getElementsByClassName("city");
const elements_2 = document.querySelectorAll(".city");

console.log(elements_1);
console.log(elements_2);

list.innerHTML += '<li class="city">Drammen</li>';

console.log(elements_1);  // live
console.log(elements_2);  // static


// -----------------------------------
// 
const element9 = document.querySelector("#my_element");
console.log(element9);

element9.innerHTML= "<p>Hello!</p>";
element9.innerText= "<p>Hello!</p>";

// Eksempel
console.log("");
console.log("-----------------------");
const car_list = [
    {id:0, brandName: "Mercedes"},
    {id:1, brandName: "BMW"},
    {id:2, brandName: "Audi"},
    {id:3, brandName: "Opel"}
]

const listElement = document.querySelector("#cars");
car_list.forEach (car => {
    // console.log(car);
    listElement.innerHTML += `<li class="car_class">${car.brandName}</li>`
})

for (let i=0; i<car_list.length; i++) {
    listElement.innerHTML += `<li class="car_class">${car_list[i].brandName}</li>`
}


// ---------------------------------------------------
// getAttribute - setAttribute

const elements_3 = document.querySelector("#link");
console.log(elements_3);

const attr = elements_3.getAttribute("href");
console.log(attr);

elements_3.setAttribute("href", "https://www.clarusway.com")
elements_3.innerText = "Go to Clarusway"


// ---------------------------------------------
// eksempel

const eleman = document.querySelectorAll("li");

eleman.forEach(w => {
    // console.log(w);
    // console.log(typeof w.innerText);
    if (w.innerText.includes("error")) {
        w.setAttribute("class", "error");
    } else if (w.innerText.includes("success")) {
        w.setAttribute("class", "success");
    }
});


// ------------------------------------------
//

const eleman2 = document.querySelector(".hello");
// console.log(eleman2);
eleman2.style.color ="red";
eleman2.style.fontWeight ="bold";
eleman2.style.textDecoration ="line-through";

// ------------------------------------
// css ler arasında değişiklikler yapmak isersek, burayı kullanabiliriz.

const deneme = document.querySelector("#myBanner");

console.log(deneme.classList);
deneme.classList.add("active");
console.log(deneme.classList);



// ------------------------------------
// createElement

const deneme2 = document.querySelector("#today");
// console.log(deneme2);
const myElement = document.createElement("p");

myElement.innerText ="onsdag";
console.log(myElement);

deneme2.appendChild(myElement);


// ------------------------------------
//

document.querySelector("#btn").addEventListener("click", clickFunction);

document.querySelector("#pare").addEventListener("mouseenter", function() {alert("Hey!")});

function clickFunction () {
    alert("I'am an alert!")
}

// document.querySelector("#btn").removeEventListener("click", clickFunction)
