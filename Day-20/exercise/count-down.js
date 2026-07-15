let count = 60; //1 min timer

const id = setInterval(() => {
    console.log(count);

    count=count-1;

    if (count < 0) {
        clearInterval(id);
        console.log("Time's Up!");
    }
}, 1000);
