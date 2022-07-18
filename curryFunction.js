let multiply = function(a, b) {
  return a * b;
}

let multiplyBYTwo = multiply.bind(this, 2);
console.log(multiplyBYTwo(4)); // 8


let add = function(a){
    return function(b){
        console.log( a + b)
    }
}

let addNUmber = add(2)
addNUmber(10)