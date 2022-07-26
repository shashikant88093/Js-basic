let Arr = [
    {
    name:"a",
    age: 23
    },
    
    {
    name:"b",
    age: 23
    },
    
    {
    name:"a",
    age: 25
    }
    ]
    
    // newArr = [
    
    // a: [23, 25]
    // b:[25]
    // ]
    let newArr =[]
    const datas = Arr.map(item => {
        if(!newArr[item.name]){
            newArr[item.name] = []
        }
        newArr[item.name].push(item.age)
    })
   console.log(newArr)

   //Z disign pattern to solve this problem
 
