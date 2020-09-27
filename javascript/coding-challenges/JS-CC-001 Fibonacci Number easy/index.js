/* 
1) arka planda random bir sayı tutulacak
2) Kullanıcıdan sayı alınacak
3) Alınan sayı kntrol edilecek
    3.1 eğer sayı tahmini sayıda büyükse "sayı büyük" yaz.
    3.2 eğer sayı tahmini sayıda küçükse "sayı küçük" yaz.
    3.3 sayılar eşitse oyunu bitir.
    
*/

let guess_count = 0;
const random_number = Math.floor(Math.random() *100+1);
console.log(random_number);

document.querySelector("#check_it").addEventListener("click", checkNumber);
function checkNumber() {
    guess_count++;
    let userInputElement = document.querySelector("#nr_game");
    document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
    if (userInputElement.value == random_number){
        alert("You are the winnder");
    }
    else if (userInputElement.value > random_number) {
        document.querySelector("#answer").innerText = "Try a smaller number!";
    }
    else if (userInputElement.value < random_number) {
        document.querySelector("#answer").innerText = "Try a higher number!";
    } else if (isNaN(userInputElement.value)) {
        // kullanıcının girdiği sayı değilse
        document.querySelector("#answer").innerText = "It's not a number"
    }
}