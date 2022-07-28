var removeDuplicates = function(nums) {
    let obj ={

    }
    // nums.forEach((item)=>{
    //     obj[item] = true
    // })
    for(let i =0;i<nums.length;i++){
        obj[nums[i]] = true
    }
    const uniqe = Object.keys(obj)
    return uniqe
};

let arr =[25,5,25,5,6,6,98,89]

console.log(removeDuplicates(arr))

