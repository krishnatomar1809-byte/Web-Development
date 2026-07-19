function multiplyGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}

let greet=function(){
    console.log("hello");
}

// multiplyGreet(greet,5); 

function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("you give wrong request")
    }
}


// Methods

// const calculator={
//     add : function(a,b){
//         return a + b;
//     },

//     sub : function(a,b){
//         return a - b;
//     }
// };

// Method Shorthand

const calculator={
    add(a,b){
        return a + b;
    },

    sub(a,b){
        return a - b;
    }
};