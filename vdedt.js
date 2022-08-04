let arrayObj = [{
    name: 'John',
    age: 30,
},
{
    name: 'Jane',
    age: 25,
},
{
    name: 'Jane',
    age: 25,
}

]
let obj = {};

arrayObj.forEach((data) => {
    obj[data.name] = data.age
}
)
console.log(obj)
let arr = []
for (let key in obj) {
    arr.push({
        name: key,
        age: obj[key]
    })
}
console.log(arr)
