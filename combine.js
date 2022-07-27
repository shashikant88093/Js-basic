let defai= [{
    name:"shashikant",
    contact:"879554",
    },
    {
    name:"shashikant",
    contact:"879554",
    },
    {
    name:"shashikant",
    contact:"879554",
    },
    {
    name:"shashikant",
    contact:"879554",
    }]
    let array =[]
    let arr =[1,2,3,4]
    defai.forEach((item,i)=>{
        array.push({
            name:item.name,
            contact:item.contact,
            index:arr[i]
        })
    }
    )
  
    console.log(array)
