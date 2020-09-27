/* 
1) arka planda random bir sayı tutulacak
2) Kullanıcıdan sayı alınacak
3) Alınan sayı kntrol edilecek
    3.1 eğer sayı tahmini sayıda büyükse "sayı büyük" yaz.
    3.2 eğer sayı tahmini sayıda küçükse "sayı küçük" yaz.
    3.3 sayılar eşitse oyunu bitir.
    
*/

let guess_count = 0;
let random_number = Math.floor(Math.random() *100+1);
console.log(random_number);

document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) checkNumber();
});

function checkNumber() {
    // guess_count++;
    let userInputElement = document.querySelector("#nr_game");
    let answerLabelElement = document.querySelector("#answer");
    if (userInputElement.value == random_number){
        alert("You are the winnder! Guess time: "+ ++guess_count);
        const choice = confirm("Game again?");

        if (choice) {
            guess_count = 0;
            let random_number = Math.floor(Math.random() *100+1);
            answerLabelElement.innerText ="";
            document.querySelector("#count_it").innerText = "";
        } else {
            answerLabelElement.innerText ="";
            document.querySelector("#count_it").innerText = "";
            alert("Thanks for playing!");
            answerLabelElement = "Best guess time: " + guess_count;
        }
        // console.log(choice);

    } else if (userInputElement.value > random_number) {
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a smaller number!";
    } else if (userInputElement.value < random_number && userInputElement.value != "") {
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a higher number!";
    } else if (isNaN(userInputElement.value)) {
        // kullanıcının girdiği sayı değilse
        answerLabelElement.innerText = "It's not a number"
    } else if (userInputElement.value == "") {
        answerLabelElement.innerText ="Enter a number please"
    }
    userInputElement.focus();
    userInputElement.value= "";
}