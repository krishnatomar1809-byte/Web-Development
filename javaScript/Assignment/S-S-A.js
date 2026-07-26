const arr=[1,2,3,4,5,6,7,8,9,10];

let double= arr.map((el)=>{
    return el*el;
});

let sum= arr.reduce((res,el)=>{
    return res+el;
});

let avg= sum/arr.length;

console.log(avg);


//Question 2

let add= arr.map((el)=>{
    return el+5;
});

console.log(add);

