let name=prompt("Enter your name");

let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let started= false;   // ye bol rha h ki game start nhi hua h jb iski value true hogi tb game start
let btn=document.querySelectorAll("button");
let level=0;
let highest=0;
let btns=["red","yellow","green","purple"];


document.addEventListener("keypress",function(event){
   if(started==false){

    console.log("Game started");
    started=true;
   }
   
   levelUp();

})

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level ++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);    //jo vi color randcolor me aaya like red then humne html me already sb color btn ki class banayi h tho idar wo class ke through uss btn ko access karlega
    gameflash(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        if(highest<level){
            highest=level;
        }
        h2.innerHTML=`Hello ${name} , Game is over your score is <b>${level}<b> and your highest score is ${highest} <br> please press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();


    
    }
}

function btnPress () {
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}