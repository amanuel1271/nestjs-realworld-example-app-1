const express = require('express');
const {AppMiddleware} = require('./src/app.middleware');


const app = express();
const nestapp = new AppMiddleware(app);

app.use(async (req, res, next) => {
    try {
        await nestapp.use(req, res, next);
        next()
    } catch (err) {
        console.log(JSON.stringify(err));
        next();
    }
});

app.get ("/about" , (req, res) => {
    res.json ({result: "hello"});
});


app.listen(5000, () => {
  console.log('Listening on port 5000');
});