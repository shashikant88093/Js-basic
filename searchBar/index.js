// ----------------------search bar debounce----------------------
let count = 0
const getData = async () => {
 console.log('fetching data',count++);
    }

let debounce = function(fn,d){
  let timer;
    return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            getData.apply(context,args);
        },d);
    }
}

const betterFunction = debounce(getData,1000);
