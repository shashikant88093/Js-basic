let arr = [85,60,1,0,22,35,85]
let obj ={}
for(let i=0;i<arr.length;i++){
   obj[arr[i]]=true
}
console.log(Object.keys(obj))
let array =Object.keys(obj)
let [a,b ] = array
let [maxNumber,sMaxNumber] = a>b?[a,b]:[b,a]
for(let i=2;i<array.length;i++){
    if(array[i]>maxNumber){
        sMaxNumber= maxNumber
        maxNumber = array[i]
        
    }else if(array[i]>sMaxNumber){
        sMaxNumber = array[i]
    }

}
console.log(sMaxNumber)

