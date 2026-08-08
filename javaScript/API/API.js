// let jsonRes= '{"fact":"In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.","length":158}';
// console.log(JSON.parse(jsonRes));
// console.log(JSON.parse(jsonRes).fact);

// let student={
//     name:"krishna",
//     marks:92,
// };




// API request

let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{                   //URL ki saari details res me aayegi
//     console.log(res);              // details ko cout kiya  
//     return res.json();
//     // res.json().then((data)=>{       // jo details mili wo aapni json format me rahegi tho usko change karege js ke object me via res.json()
//     //     console.log(data);            // .json vi promise return karega tho phir then use karege data variable me js obejct ka formate store hoga
//     // })                                // phir uss format ko cout karlege via console.log(data)
// })

// .then((data)=>{
//     console.log(data);     //jb data successfuly convert hojayega 
// })
// .catch((err)=>{                         //agar fetch nhi hua sari se tho error err me store aur wo print
//     console.log("ERROR- ",err);
// })



fetch(url)
.then((res)=>{
    console.log(res);
    return res.json;
})
.then((data)=>{
    console.log(data);
    return fetch(url);        // url ko phirse fetch kiya
})

.then((res)=>{                // fetch hone ke bdd ye then chalega aur json format wale res ko store karega
    return res.json();          //phir uss res ko js ke object me convert karega aur return karega promise
})
.then((data2)=>{                    //uper wala convert successfull hone pr ye then chalega aur data 2 me store karega js ke object ko usko print karega
    console.log("Data 2- ",data2);
})

.catch((err)=>{
    console.log("ERROR- ",err);
});