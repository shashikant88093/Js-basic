const name = {
    firstName:"Shashikant",
    lastName:"Kumar"
}

const printFunction = function(age,number,country){
    console.log(this.firstName + " " + this.lastName + " "  + age + " " + number + " " + country )
}

Function.prototype.myBind= function(...args){
    const fn = this
    const params = args.slice(1)
    return function(...args2){
        fn.apply(args[0],[...params,...args2])

    }
}

const printData = printFunction.myBind(name,23,45)
printData("India")
const da={
    name:"shashikant",
    address:"chennai"
}
const s = {...da,name:"chandan"}
console.log(s)
const {...rest}= da
console.log(rest)