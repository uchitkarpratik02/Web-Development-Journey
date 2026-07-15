let id = setInterval(()=>{
    console.log("Running...");
},1000);
setTimeout(() => {
    clearInterval(id);
    console.log("Stop Running...");    
}, 5000);