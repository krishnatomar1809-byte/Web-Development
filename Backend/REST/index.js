const express=require("express");
const app=express();
const port=8080;
const path=require("path");

const methodOverride=require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({exxtended:true}));
 
app.set("view engine","ejs"); 
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

const {v4:uuidv4}= require("uuid");

app.listen(port, ()=>{
    console.log(`server started listen on port ${port}`);
});

let posts=[
    {
        id:uuidv4(),
        username:"krishna",
        content:"I love to do developing",
    },

    {
        id:uuidv4(),
        username:"anshu",
        content:"Hardwork is the key of success",
    },

    {
        id:uuidv4(),
        username:"aviral",
        content:"I just born BLACK",
    },

];

app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username ,content}=req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p) => id===p.id);
    res.render("show.ejs",{post});


})


app.patch("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let newcontent=req.body.content;
    let post=posts.find((p)=> id===p.id)
    post.content=newcontent;

    res.redirect("/posts");
    
})

app.get("/posts/:id/edit",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=> id===p.id)
    res.render("edit.ejs",{post});

})

app.delete("/posts/:id",(req,res)=>{
    let{id}=req.params;
    posts=posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})
