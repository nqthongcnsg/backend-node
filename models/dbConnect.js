const mysql= require('mysql')


const connection= mysql.createConnection({host: "us-cdbr-east-06.cleardb.net",user:"b38e9678cb755c", password:"8052c37d", database:"heroku_fb7739fae17ff11"})
connection.connect();

module.exports= connection
