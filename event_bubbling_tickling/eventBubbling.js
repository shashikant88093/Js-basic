//event bubling 
// if there are three div. Each div is having it child 
// total three div

// so in event bubling if child will be call then it's parent will be called til last

//event capturing |  event tickling

// it is opposite of event bubling

//bubbling happen for child to parent level
//capturing happen for parent to child level
//-----------------bubbling--------------------

document.querySelector("#grandparent").addEventListener("click", () => {
    // console.log(e.target);
    console.log("grandparent");
        
    
},false);// replacing false with true will make it event capturing
document.querySelector("#parent").addEventListener("click", () => {
    // console.log(e.target);
    console.log("parent");
        
    
},false);// replacing false with true will make it event capturing
document.querySelector("#child").addEventListener("click", (e) => {
    // console.log(e.target);
    console.log("child");
        e.defaultPrevented();// it will prevent the default action of the event
    
},false);// replacing false with true will make it event capturing