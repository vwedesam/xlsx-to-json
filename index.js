const express = require('express');
const extract = require('./lib/extract');
app = express();
const port = process.env.PORT || 3210;

app.use(express.json());
app.get('/store-sample', (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.method == "OPTIONS") {
        res.setHeader("Access-Control-Allow-Credentials", "'true");
        res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Origin, x-access-token, x-api-token, X-Requested-With, Content-Type, Accept");
        res.setHeader("Access-Control-Max-Age", "3800");

        res.status(200).end();
    }

    let limit = req.query.limit || 10
    const data = extract(limit);

    res.json(data);
});

app.listen(port, () => {
    console.log("server running on port " + port);
});
