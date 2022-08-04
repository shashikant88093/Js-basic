var removeDuplicates = function(nums) {
    // let obj ={

    // }
    const length = nums.length;

    if( length <= 1 ){
        return length;
    }

    let i = 0;

    for(let j = 1; j < length; j++){
        if( nums[i] != nums[j] ){
            i++;

            nums[i] = nums[j];
    console.log(nums[i])

        }
    }

    return i + 1;
 };

let arr =[25,5,25,5,6,6,98,89]

console.log(removeDuplicates(arr))

