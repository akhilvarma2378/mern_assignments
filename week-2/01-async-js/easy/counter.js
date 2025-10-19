let i=0;

// setInterval(()=>{
//     console.log(i);
//     i++;
// },1000);

function counter(){
    console.log(i);
    i++;
    if(i>=0)
    {
        setTimeout(counter,1000);
    }
}

counter()