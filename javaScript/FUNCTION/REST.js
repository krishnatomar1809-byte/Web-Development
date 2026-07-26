function sum(...args){
    return args.reduce((res,el)=>{
        return res+el;
    })
}

// yani jitne vi argument liye humne wo as a collect aaya h like (1,2,3,4,5) then humne usko array me store krdiya phir uspr array ke operation laga rhe h 

function min(...argument){
    return argument.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    })
}