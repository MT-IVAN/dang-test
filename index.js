const mysql = require('mysql');
const express = require("express");
const ahola = "asdads"
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database : "ivis",
  password: ""
});
//aqui va el codigo de dang
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query('select * from user', (err, results, fields)=>{
  if(err)
    throw err;
    results.forEach(pan => {
      console.log(pan);
  });
});

con.end();


const arr = [1,2,3,5,6,7,8,9,0];
const ans =[];
for(let i = 0; i< arr.length;i++){
  if(arr[i]%2==0)
    {
      ans.push(arr[i])
    }

}

console.log("hola")
arr.forEach(num => console.log(num));

const filtrados = arr.filter(enteros => enteros%2==0);
console.log(filtrados);



