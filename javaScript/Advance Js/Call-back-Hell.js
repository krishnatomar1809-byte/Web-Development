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


// CallBack Nesting -> CallBack Hell



// function saveToDb(data, success, failure){
//     let networkSpeed= Math.floor(Math.random()*10)+1;

//     if(networkSpeed>5){
//         success();
//     }else{
//         failure();
//     };
// };

// saveToDb("Krishna 1st DATA",
//     ()=>{
//         console.log("data 1st got saved");
//         saveToDb("This is 2nd Data", ()=>{
//             console.log("2nd data got saved");
//             },
        
//             ()=>{
//             console.log("2nd data got fail");
//             }
//         );
//     },
//     ()=>{
//         console.log("weak connection. data not saved");
//     }
// )



// With Promise

function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let networkSpeed= Math.floor(Math.random()*10)+1;
        if(networkSpeed>4){
            resolve("Sucess: data was stored");
        }else{
            reject("Failure: data was not store weak connection");
        };
    });
};


saveToDb("krishna")
    .then(()=>{
        console.log("data 1 was stored");
        return saveToDb("tomar");
    })
    .then(()=>{
        console.log("data 2 was stored");      //ye hamara second promise pr chalega jo return hokr then ko milega uspr
        return saveToDb("Singh"); 
    })
    .then(()=>{
        console.log("data 3 saved");
    })

    
    .catch(()=>{
        console.log("rejected");
    })

