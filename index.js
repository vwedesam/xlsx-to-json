const express = require('express');
const extract = require('./lib/extract');
app = express();
const port = process.env.PORT || 3210;

app.use(express.json());
app.get('/store-sample', (req, res)=> {

    let limit = req.query.limit || 10
    const data = extract(limit);

    res.json(data);
});

app.listen(port, ()=>{
    console.log("server running on port "+ port);
});
