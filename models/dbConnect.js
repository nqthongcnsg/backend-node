const mysql= require('mysql')


const connection= mysql.createConnection({host: "us-cdbr-east-06.cleardb.net",user:"bccb90af80e10c", password:"90a67e67", database:"heroku_c23a03559c811d3"})
connection.connect();

module.exports= connection
