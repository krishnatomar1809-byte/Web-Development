let str="abcdabcdefgggh";

function unquieStr(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let currstr=str[i];
        if(ans.indexOf(currstr)==-1){
            ans += currstr;
        }
    }
    return ans;
}

// console.log(unquieStr(str));

//Q3

let arr=["Australia","Germany","United State Of America"];
let long="";

function longCoun(arr,long){
    for(let i=0;i<arr.length;i++){
       if(arr[i].length>long.length){
            long=arr[i];
        }
    }
    return long;
}

// console.log(longCoun(arr,long));

// Q4

let str1="apnacollege";

function vowCount(str1){
    let count=0;
    for(let i=0;i<str1.length;i++){
        if(str1[i]=='a' || str1[i]=='e' || str1[i]=='i' || str1[i]=='o' || str1[i]=='u'){
            count++;
        }
        
    }
    return count;
}

console.log(vowCount(str1));


// Q5

let n=100;

function randNum(n){
    return Math.floor(Math.random()*n)+1;
}

console.log(randNum(n));

