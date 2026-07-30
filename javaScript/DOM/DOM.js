// let para= document.createElement('p');
// para.innerText="Hi,I'm red";
// para.style.color='red';
// document.querySelector('body').append(para);

// let h3=document.createElement('h3');
// h3.innerText=`I'm blue h3`;
// h3.style.color='blue';
// document.querySelector('body').append(h3);

// let div=document.createElement('div');
// let h2=document.createElement('h2');
// let para2=document.createElement('p');

// h2.innerText="I'm in div";
// para2.innerText="ME TOO";

// div.append(h2);
// div.append(para2);

// div.classList.add("box");
// document.querySelector('body').append(div);


// Question 1
let btn=document.createElement("button");
let input=document.createElement("input");

btn.innerText="Click Me";

document.querySelector("body").append(btn);
document.querySelector("body").append(input);

//Question 2

btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");


// Question 3

document.querySelector("#btn");

btn.classList.add("btn");


// Question 4

let h1=document.createElement("h1");
h1.innerHTML="<u>DOM PRACTICE</u>";
h1.style.color="purple";

document.querySelector("body").prepend(h1);


//Question 5

let para=document.createElement("p");
para.innerHTML="Apna College <b>Delta</b> Practice";

document.querySelector("body").append(para);



