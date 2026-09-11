let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";


let btn=document.querySelector("button");
let para=document.querySelector("p");
let img=document.querySelector("#img");

btn.addEventListener("click",async ()=>{
    let link = await getfact();
    // para.innerText=fact;

    img.setAttribute("src",link);

})

async function getfact(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }catch(e){
        return "NO image FOUND";
    }
}