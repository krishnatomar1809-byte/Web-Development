let arr=["krishnatomar","anshu","aviral"];
let newarr= arr.map((el)=>{
    return el.toUpperCase()
})

// Question 4

const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];

console.log(doubleAndReturnArgs([1,2,3],4,4));


// Question 5

const mergeObject=(obj1 , obj2)=>({...obj1,...obj2});

console.log(mergeObject({a:1,b:2},{c:3,d:4}));