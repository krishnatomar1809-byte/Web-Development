let sum=54;   // Global Scope

function calSum(a,b){
    let sum = a+b;
    console.log(sum);  // Function Scope
}

// console.log(sum);


let greet = "Hello";

function changeGreet(){

    let greet="Namaste";
    console.log(greet);

    function innerGreet(){   // ye run nhi hua kiyuki usko bss define kiya h call nhi kiya
        console.log(greet);
    }
}

console.log(greet);  //hello
changeGreet();       // namaste
console.log(greet);  // hello