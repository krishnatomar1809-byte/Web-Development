// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// let newArr=[];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]===2){
//         arr.splice(i,1);
//     }
//     newArr.push(arr[i]);
// }
// console.log(newArr);



//Question 2

// let num=287152;
// let count=0;
// let copy= num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);


//Question 3

// let num=287152;
// let sum=0;
// let copy=num;

// while(copy>0){
//     let digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }

// console.log(sum);


//Question 4


// let num=7;
// let fact=1;

// for(let i=num;i>0;i--){
//     fact=fact*i;
// }
// console.log(fact);


//Question 5

let arr=[5,4,9,2,10];
let lar=0;

for(let i=0;i<arr.length;i++){
    if(lar<arr[i]){
        lar=arr[i];
    }
}
console.log(lar);

