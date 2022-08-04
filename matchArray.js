let arr1 = [{
    name: "l1",
},
{
    name: "l2",
    data: "34"
}
]
let arr2 = [{
    name: "l1",
    age: "25"

}, {
    name: "l2",
    age: "56"
},
    , {
    name: "l2",
    age: "65"

}]

let dfiaData=[]
    arr1.map((item)=>{
        arr2.map((items)=>{
         if(item.name === items.name){
            dfiaData.push({...item,...items})
        }
        })
    })
    
console.log(dfiaData) 

