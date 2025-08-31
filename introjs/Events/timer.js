function myfunction(){
    console.log("I live in london ")
    console.log("I hate it!")
}

let timer =  setInterval(
     myfunction
    , 1000);

function stop() {
    clearInterval(timer);
}
    setTimeout(stop,10000)