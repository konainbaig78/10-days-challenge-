//Async

let intervalId;
function startInterval(){
    if(!intervalId){
    intervalId=setInterval(()=>{
        console.log("nain", new Date(), 2000)
    })
}
    
}

function endInterval(){
    if(intervalId){
        clearInterval(intervalId)
        intervalId=null
        console.log("Stopped...!")
    }
}

document.querySelector("#b1").addEventListener("click", startInterval); // Start button
document.querySelector("#b2").addEventListener("click", endInterval);  // Stop button