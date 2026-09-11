// h1=document.querySelector("h1");

// function changeColor(color,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColor) nextColor();    // if esliye lagaya h taki check kare ki agar next function call diya h humne tho ye run hoga wrna nhi hoga tho check krne ke liye lagaya h 
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("green",1000);     
//     });
// });


h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color=color;
        resolve("color was changed");
        },delay);
    });
};


changeColor("red",1000)
.then(()=>{
    console.log("changed into red");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("changed into orange");
    return changeColor("green",1000);
})

.then(()=>{
    console.log("changed into green");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("change into blue");
})