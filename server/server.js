const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const delay = 1500;

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', function (req, res) {
    res.send('Silverlight Replace Backend Mock, version 0.0.1\n\n' + new Date());
});

app.get('/ping', function (req, res) {
    res.send('success\n\n' + new Date());
});

app.post('/sitecore/api/names/save', function (req, res) {
    console.log('POST:' + '/sitecore/api/names/save');
    console.log("Name: \n" + req.body.name);

    if (req.body.name.indexOf("dummy") === -1) {
        fs.readFile("responses/namesSuccess.json", "utf8", function(err, contents) {
            var json = JSON.parse(contents)
            console.log("RESPONSE: \n" + JSON.stringify(json))
            setTimeout(function() { res.send(json) }, delay);
        })
    } else {
        const json = req.body.dataArr;
        console.log("RESPONSE else: \n" + JSON.stringify(json))
        setTimeout(function() { res.send(json) }, delay);
    }
});

app.get('/sitecore/api/names/get', function (req, res) {
    console.log("GET: /sitecore/api/names/get")
    fs.readFile("responses/names.json", "utf8", function(err, contents) {
        var json = JSON.parse(contents)
        console.log("RESPONSE: \n" + JSON.stringify(json))
        setTimeout(function() { res.send(json) }, delay);
    })
});

app.get('/test/api/details/get', function (req, res) {
    console.log("GET: /test/api/details/get")
    fs.readFile("responses/gridData.json", "utf8", function(err, contents) {
        var json = JSON.parse(contents)
        console.log("RESPONSE: \n" + JSON.stringify(json))
        setTimeout(function() { res.send(json) }, delay);
    })
});

const server = app.listen(20189, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Silverlight Replace Backend Mock listening at http://%s:%s', host, port);
});