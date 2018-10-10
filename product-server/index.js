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

app.get('/actor/add', (req, res) => {
    const {first_name, last_name} = req.query;
    console.log(first_name, last_name);
    const INSERT_PRODUCTS_QUERY = `INSERT INTO actor(first_name, last_name) VALUES('${first_name}', '${last_name}')`;
    // res.send('adding product');

    connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('successfully added product')
        }
    });
})

app.get('/actor', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            console.log('success');
            return res.json({
                data: results
            })
        }
    });
});

app.listen(4000, () => {
    console.log('product server listening on port 4000');
});