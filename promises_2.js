const promiseOne = new Promise(function(resolve, reject) {
    
     // do an async operation
     // db calls ,api class


        setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },5000)
})

promiseOne.then(function(){
    console.log("promise consumed")

});