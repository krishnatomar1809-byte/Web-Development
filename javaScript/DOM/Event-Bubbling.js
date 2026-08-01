let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("Div was clicked");
})

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})

for(list of lis){
    list.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("list is clicked");
    })
}