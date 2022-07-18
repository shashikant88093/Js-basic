let name = {
    firstName: 'John',
    lastName: 'Doe',
    firstFunction : function() {
        console.log(this.firstName + " " + this.lastName);
    }
}
name.firstFunction();
let name2 = {
    firstName: 'Jane',
    lastName: 'Doe',
}
name.firstFunction.call(name2);

let secondFunction = function(age,number) {
    console.log(this.firstName + " " + this.lastName + " " + age + " " + number);
}
//borrowing the function from the object
secondFunction.call(name,  30, 123);
//borrowing the function from the object
secondFunction.apply(name, [30, 123]);
//creating copy of the function
let thirdFunction = secondFunction.bind(name2, 30, 123);
thirdFunction()
