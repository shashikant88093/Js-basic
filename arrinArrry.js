
const arr = [
    {
        name: "a",
        age: "25"
    },
    {
        name: "b",
        age: "34"
    },
    {
        name: "a",
        age: "45"
    }
]
let newArray = []
arr.map((data) => {
    if (!newArray[data.name]) {
        newArray[data.name] = []

    }
    newArray[data.name].push(data.age)
}


)
console.log(newArray)