const express = require('express');
const {AppMiddleware} = require('./src/app.middleware');


const app = express();
const nestapp = new AppMiddleware(app);

app.use((req, res, next) => {
    const nest = nestapp.use(req, res, next);
    nest.then(() => {
      next();
    }).catch(err => {
      console.log(JSON.stringify(err));
      next();
    });
  });


app.listen(5000, () => {
  console.log('Listening on port 5000');
});