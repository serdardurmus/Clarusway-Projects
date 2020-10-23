
function getNumber() {
    let nummerList = 0;
    let count = 1;
    let mittnummer = document.querySelector("#inputNumber").value;
    
    if (mittnummer<1) {
        document.querySelector("#result").innerText = "Tass inn et nummer større enn 1";
    } else {
        while( mittnummer>count) {
            // document.querySelector("#result").innerText = mittnummer
            if (mittnummer%count == 0) { nummerList += count} 
            count += 1;
        }
    }
    document.querySelector("#inputNumber").value =""
    if (nummerList == mittnummer) {
        document.querySelector("#result").innerText = `Nummer ${mittnummer} er perfekt!`
    } else {
        document.querySelector("#result").innerText = `Nummer ${mittnummer} er ikke perfekt!`
    }
    
}

function getRandom() {
    const random_number = Math.ceil(Math.random()*100)
    let nummerList = 0;
    let count = 1;

    if (random_number<1) {
        document.querySelector("#result").innerText = "Tass inn et nummer større enn 1";
    } else {
        while( random_number>count) {
            // document.querySelector("#result").innerText = random_number
            if (random_number%count == 0) { nummerList += count} 
            count += 1;
        }
    }
    document.querySelector("#inputNumber").value =random_number
    if (nummerList == random_number) {
        document.querySelector("#result").innerText = `randomNummer ${random_number} er perfekt!`
    } else {
        document.querySelector("#result").innerText = `randomNummer ${random_number} er ikke perfekt!`
    }
    
}