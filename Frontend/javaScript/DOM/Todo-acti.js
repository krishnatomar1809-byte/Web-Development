let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText="delete";
    item.append(delbtn);

    ul.append(item);
    inp.value="";
})



ul.addEventListener("click",function(event){
    
    if(event.target.nodeName=="BUTTON"){
        let par= event.target.parentElement;
        par.remove();
    }
})




// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();

//     })
// }