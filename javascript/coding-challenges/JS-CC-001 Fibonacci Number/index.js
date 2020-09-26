function getNumber() {
    let myNumber = document.querySelector("#inpNumber").value;
    if (myNumber < 0 || myNumber =="") {
        document.querySelector('#uyari').innerHTML='Enter a positive number.';
    } else {
        document.querySelector('#uyari').innerHTML='';
        fibonacci(myNumber);
        factorial(myNumber);
        prime(myNumber);
    }
}

function fibonacci(myNumber) {
    // Fibonacci Number
    var a = 1, b = 0, temp, result = myNumber;
    while (result > 0){
      temp = a;
      a = a + b;
      b = temp;
      result--;
    }
    document.querySelector("#result_fib").innerHTML=`${myNumber}. fibonacci is: ${b}`;

}


function factorial(myNumber) {
        // Factorial Number
        let temp2 = myNumber;
        if (temp2 == 0 || temp2 == 1) {
        document.querySelector("#result_fac").innerHTML=`The factorial of ${myNumber} is 1.`; }
        if (temp2 > 1) {
            let result2 = 1;
            while (temp2 > 1) { 
                result2 *= temp2;
                temp2--;
            }
            document.querySelector("#result_fac").innerHTML=`The factorial of ${myNumber} is ${result2}.`;
        }
}

function prime(myNumber) {
    let counter = 0;
    let temp = myNumber;

    for (let i = 1; i < temp+1; i++) {
        if (temp%i != 0) {counter +=1}
    }
    if ((temp == 0) || (temp == 1) || (counter >=3)) {document.querySelector("#result_asl").innerHTML=`${myNumber} is not prime number`;} 
    else {document.querySelector("#result_asl").innerHTML=`${myNumber} is prime number`;} }
