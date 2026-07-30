let btns=document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick=function(){
    //     console.log("Hello");
    // }

    //or

    btn.onclick= sayHello;
    btn.onmouseenter=function (){
        console.log("Mouse event");
    }
}


function sayHello(){
    alert("hello");
}
