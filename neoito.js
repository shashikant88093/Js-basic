//2nd largest number in an array
const array = [1,2,3,4,5,6,7,8,9,10]
// let [maxNumber,sMaxNumber] = arr
let [a,b] = array;
let [maxNumber,sMaxNumber] = a>b?[a,b]:[b,a]
// const largest = Math.max.apply(Math,arr)
for(let i =2;i<array.length;i++){
       if(array[i]> maxNumber){
         sMaxNumber= maxNumber
          maxNumber= array[i]
       }else if(array[i]>sMaxNumber){
        sMaxNumber= array[i]
       }
console.log(maxNumber,sMaxNumber)

}
console.log(sMaxNumber)

const arr = [1,2,3,5,7,9,4,5,6,7,8,9,10]
let obj = {}
arr.forEach((item,i)=>{
         obj[item] = true
})
console.log(Object.keys(obj))
