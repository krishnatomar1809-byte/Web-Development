let url ="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let collArr=await getCllg(country);
    show(collArr);
});


function show(collArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(coll of collArr){
        console.log(coll.name);
        let li=document.createElement("li");
        li.innerText=coll.name;
        list.appendChild(li);
    };
}


async function getCllg(country){
    try{
        let res=await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log("ERROR- ",e);
        return [];
    }
}



