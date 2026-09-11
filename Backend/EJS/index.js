const express= require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));


app.listen(port,()=>{
    console.log(`port was listening ${port}`);
})

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1;      // assume ki ye koi data aaya dataset se
    res.render("rolldice.ejs" , {diceval});            //diceval ko ejs me pass kr rha taki ko render hokr web page pr htm file ke through show ho
})

app.get("/ig/:username", (req,res)=>{
    // const followers=["krishna","anshu","aviral","mushkan"];
    const {username}=req.params;
    const instadata=require("./data.json");

    const data=instadata[username];        // yaha hum data me instadata ke username se related data store kr rhe h
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
})