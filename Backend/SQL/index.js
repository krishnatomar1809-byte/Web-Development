const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'delta_app',
  password: "Krisnhu1809$",
  port: 3306,
});

try {
  connection.query("SHOW TABLE",(err,result)=>{
    if(err) throw err;            
    console.log(result);   // results contains rows returned by server
  });

} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser=() => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}





// cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
// .\mysql.exe -u root -p