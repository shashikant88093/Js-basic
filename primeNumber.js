// prime number 
//loop n2
let number = 100
let primeNumber = []
for (let i = 2; i < number; i++) {
    let isPrime = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        primeNumber.push(i)
    }
}

console.log(primeNumber)
//o(n)
function p(n) {
              
    let  i, flag = true;
      
    // Getting the value form text
    // field using DOM
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
    console.log(n,"n")

          
        // Check and display alert message
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
}
p(10)