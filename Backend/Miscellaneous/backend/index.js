const express=require("express");
const app= express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    res.send("Standard GET request");
})

app.post("/register",(req,res)=>{
    let {user,pass}=req.body;
    res.send(`standard POST request welcome ${user}`);
})

app.listen(port,()=>{
    console.log(`port has started at ${port}` );
})