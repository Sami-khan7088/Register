var express= require('express')
var mysql = require('mysql')
var app=express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"users",
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.post('/register',cors(),function (req) {
    var name=req.body.name;
    var email=req.body.email;
    var mobile=req.body.mobile;
    var profession=req.body.profession;
    var password=req.body.password;
    var file=req.body.file;
    con.query("insert into empployee values(?,?,?,?,?,?,?)",["",name,email,mobile,profession,password,file],function (error) {
      if (!!error){
          console.log("error")
      }
      else{
          console.log("Successful query");
      }
    });
})
app.listen(3002,()=>{
    console.log("yes");
});
