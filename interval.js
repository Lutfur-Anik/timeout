let second=0;
const time=setInterval(() => {
    console.log(second++)
    if(second>10){
        clearInterval(time)
    }
}, 1000);