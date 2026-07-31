let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h2=document.querySelector("h2");
    let randomColor= getrandomColor();

    h2.innerText=randomColor;

    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;

    console.log("Color updated");

})

function getrandomColor(){
    let red= Math.floor(Math.random()*255);   //+1 esliye nhi kr rhe kiyuki 0 se start h tho 255 aajayega
    let green = Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}