const express = require('express');
const {AppMiddleware} = require('./src/app.middleware');


const app = express();


app.get ("/about" , (req, res) => {
    res.json ({result: "hello"});
});


//Nest controllers go here
const nestapp = new AppMiddleware(app, "/v3/accounts");
app.use(async (req, res, next) => {
    try {
        await nestapp.use(req, res, next);
        next();
    } catch (err) {
        console.log(JSON.stringify(err));
        next();
    }
});


app.listen(5000, () => {
  console.log('Listening on port 5000');
});