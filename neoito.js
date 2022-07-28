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

const arr = [55,88,99,66,25,63,78,95,87,25,66,55]
// let obj = {}
// arr.forEach((item,i)=>{
//          obj[item] = true
// })
// console.log(Object.keys(obj))
let newData =arr.filter((item,i)=>{ return arr.indexOf(item) == i})
console.log(newData)
