const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const express=require("express");
const app=express();
const path = require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Krinshu1809$",
  port: 3306,
});

let getRandomUser=() => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

app.listen("8080",()=>{
  console.log("server is listening on port 8080");
});

app.get("/",(req,res)=>{
  let q="SELECT count(*) FROM user";
  try {
  connection.query(q ,(err,result)=>{
    if(err) throw err;            
    let count=(result[0]["count(*)"]);   // results contains rows returned by server
    res.render("home.ejs",{count});
  });

} catch (err) {
  console.log(err);
  res.send("Some error has occured");
};

  
});




// connection.end();

// let q="INSERT INTO user (id,username,email,password) VALUES ?";
// let data=[];

// for(let i=1;i<=100;i++){
//   data.push(getRandomUser());       //100 fake data
// };
          


// try {
//   connection.query(q, [data] ,(err,result)=>{
//     if(err) throw err;            
//     console.log(result);   // results contains rows returned by server
//   });

// } catch (err) {
//   console.log(err);
// };




// cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
// .\mysql.exe -u root -p