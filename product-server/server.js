var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'world'
});

connection.connect(
    function (error) {
        if (!!error) {
            console.log('Error');

        } else {
            console.log('connected');
        }
    }
);

app.get('/', function (req, resp) {
    connection.query("SELECT FROM sakila", function (error, rows, fields) {

        if (!!error) {
            console.log('Error in the query');
        }else{
            console.log('successful query!');
        }
    });
});

app.listen(1337);
