const express = require('express');
const {bootstrap} = require('./src/app.middleware');


const app = express();
const nestapp = bootstrap(app, "/v3/accounts");

app.get ("/about" , (req, res) => {
    res.json ({result: "hello"});
});


app.use(function(err, req, res, next) {
    console.log(req, err, res);
    if(!err) return next(); // you also need this line
    console.log("error!!!");
    res.send("error!!!");
});



app.listen(5000, () => {
  console.log('Listening on port 5000');
});

app._router.stack.forEach(function(r){
    if (r?.route?.path != null) {
        console.log(r?.route?.path);
    }
})