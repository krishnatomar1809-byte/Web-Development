// let arr1=[55,24,21,25,10,12,5,99,41,81,69];

// let ans1=arr1.reduce((min,el)=>{
//     if(el>min){
//         return min;
//     }else{
//         return el;
//     }
// });

// console.log(`The min value of the array is ${ans1}`);


// OR with Function

function getMin(arr1){
    let ans= arr1.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });

    return ans;
}

let arr1= [55,24,21,25,10,12,5,99,41,81,69];

console.log(`The min value of the arr is ${getMin(arr1)}`);