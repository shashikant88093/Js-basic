// let number = 12344
// console.log("You")
// let revesr = ""
// console.log(number % 10)

// for(let i =0; i < number.length; i++){
//     //   revesr= number % 10 + revesr
//     console.log(number % 10)
//     // revesr =  revesr + number[number.length - i - 1]
// }
// console.log(revesr)

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let smallest
// arr.map((data)=>{
//     if(data < smallest){
//         smallest = data
//     }
// })
// console.log(smallest)

// const apiData=async()=>{
//  const userData = Db
// }

const arr = [
    {name:"a",
    age:"25"},
    {
    name:"b",
    age:"34"
    },
    {
    name:"a",
    age:"45"},
    {
        name:"c",
        age:"45"},
        {
            name:"c",
            age:"45"}
    ]
    let newArray = []
    arr.map((data)=>{
     if(!newArray[data.name]){
            newArray[data.name] = []
           
        }
        newArray[data.name].push(data.age)
    }


    )
    console.log(newArray)