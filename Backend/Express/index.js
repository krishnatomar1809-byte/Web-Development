const express=require("express");
const app=express();

let port=3000;
app.listen(port,()=>{
    console.log("Server got started")
})

// app.use((req,res)=>{
//     console.log("req accepted");

//     res.send("this is a basic response");
//     res.send({
//         name:"apple",
//         color:"red",
//     });
// });


// get was used for specipy path

app.get("/",(req,res)=>{
    res.send("this is home path");
});

// app.get("/search",(req,res)=>{
//     res.send("this is search path");
// });


//    /*splat isko last me likho rna ye universal match hojayega neeche get match nhi hoga

// app.get("/*splat",(req,res)=>{
//     res.send("this path does not exist");
// });

//parameter

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;               //define kiya h ki username aur id parameter/variable ki tarah use hue h 
    let htmlStr= `<h1>Welcome to the page of @${username}.<h1>`;

    res.send(htmlStr);
})