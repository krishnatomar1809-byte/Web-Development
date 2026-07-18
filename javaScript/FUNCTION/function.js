function rollDice(){
    let dice= Math.floor(Math.random()*6)+1;
    console.log("Your Dice number is", dice);
}

// rollDice();


// Avg of three number

function avgNum(num1, num2, num3){
    let avg= Math.floor((num1+num2+num3)/3);
    console.log("the avg of th num are", avg);
} 

// avgNum(9,9,9);
// avgNum(24,55,48);


// Table
function Table(num){
    let tab;
    for (let i=1;i<=10;i++){
        tab=num*i;
        console.log(tab);
    }
}

// Table(2);

// Sum of N Natural number
function natSum(n){
    let sum= n*(n+1)/2;
    return sum;
}

// console.log(natSum(10));

// Concatenation of a string array elemnts
let str=["hello","krishna","tomar","this","side"];

function conCat(str){
    let result=" ";
    for(let i=0;i<str.length;i++){
        result += " "+str[i];

    }
    return result;

}

console.log(conCat(str));