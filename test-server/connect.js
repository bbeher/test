// let mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'login@123',
//     database: 'todoapp'
// });

// connection.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
   
//     console.log('Connected to the MySQL server.');
//   });

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM actor';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'login@123',
    database: 'sakila'
});

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'me',
//     password : 'secret',
//     database : 'my_db'
//   });
  


connection.connect((err) => {
    if(err) {
        console.log('error!');
        return err;
    }
    console.log('connected');
})


app.use(cors());

app.get('/', (req, res) => {
    res.send('go to products to see products');
});

// app.get('/actor/add', (req, res) => {
//     const {name, price} = req.query;
//     const INSERT_PRODUCTS_QUERY = 'INSERT INTO products (name, price) VALUES(${name}, ${price})';
//     // res.send('adding product');

//     connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
//         if(err) {
//             return res.send(err)
//         } else {
//             return res.send('successfully added product')
//         }
//     });
// })

app.get('/actor', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            console.log('error');
            return res.json({
                data: results
            })
        }
    });
});

app.listen(4000, () => {
    console.log('product server listening on port 4000');
});