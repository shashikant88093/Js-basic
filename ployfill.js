
let printName = function(age, number,country) {
    console.log(this.firstName + " " + this.lastName + " " + age + " " + number + " " + country);
}
let name = {
    firstName: 'John',
    lastName: 'Doe',
}
Function.prototype.myBind = function(...args) {
    var fn = this;
    const param = args.slice(1)
    return function(...args2) {
       fn.apply(args[0], [...param,...args2]);
    };
  }
    let secondFunction = printName.myBind(name,12, 32)
    secondFunction("India")