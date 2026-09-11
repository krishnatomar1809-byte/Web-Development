let arr=[21,15,12,32,45,95,20,10,5,3,99];

let src= arr.reduce((res,el)=>{
    if(el>res){
        return el;
    }
    else{
        return res;
    }
});

console.log(src);