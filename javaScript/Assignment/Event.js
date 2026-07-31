//Question 2  Event Listener question 2

let btn=document.createElement("button");
btn.innerText="CLICK ME!";
let body=document.querySelector("body");
body.append(btn);
btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
})



let user=document.querySelector("input");
let heading=document.querySelector("h2");

user.addEventListener("input",function(){

    let result=" ";
    for(let i=0;i<this.value.length;i++){
        let ch= this.value[i];

        if(ch>="A"&& ch<="Z" || ch>="a" && ch<="z" || ch==" "){
            result+=ch;
        }
    }

    heading.innerText=result;

})