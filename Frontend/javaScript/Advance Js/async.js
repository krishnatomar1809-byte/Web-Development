// Async function

// async function greet(){
//     return "hello";    //return promise
// }

// greet()

// .then(()=>{
//     console.log("promise was resolved");
// })

// .catch(()=>{
//     console.log("promise was rejected");
// });





// Await function

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let newNum=Math.floor(Math.random()*10)+1;
            console.log(newNum);
            resolve();       // resolve js ko batata h ki kaam ya function call complete hochuka h next line pr jaa skte h aab
        },1000);
    });
}

async function demo(){
    await getNum();   //await bolta h ki jb tk await wala function pura complete na ho tb tk next line pr mt jao
    await getNum();
    await getNum();
    getNum();
}



// Async and await use in our color change function

h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{


            let num= Math.floor(Math.random()*10)+1;     //aab ye reject hoja num 3 se bada aaya
            if(num>3){
                reject("promise rejected");
            }

        h1.style.color=color;
        console.log(`color was changed into ${color}`);
        resolve(`color was changed`);
        },delay);
    });
};

// Before await and async

// changeColor("red",1000)
// .then(()=>{
//     console.log("changed into red");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("changed into orange");
//     return changeColor("green",1000);
// })

// .then(()=>{
//     console.log("changed into green");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("change into blue");
// })







//after await and async

async function demo(){
    // await changeColor("red",1000);
    // await changeColor("green",1000);
    // await changeColor("blue",1000);
    // await changeColor("purple",1000);
    // changeColor("orange",1000);


    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("purple",1000);
        changeColor("orange",1000);
    }catch(err){
        console.log(err);
        console.log("error caught");
    }

    let a=3
    console.log(a);
    console.log("new number: ", a+3);         // ye chalega hi nhi agar uper humara num > 3 hogya balki ye tho promise se related hi nhi h esliye isse bache se liye hum await function ko try me daal dete h 

}

