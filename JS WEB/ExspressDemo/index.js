const express = require('express');

const app = express();

const port = 3000;

const catalogRouter = require('./catalog');
const logger = require('./logger');

app.get('/',logger, (req,res) => {
   res.send('Hello express!');
});

app.use(catalogRouter);
//app.use(logger);

app.get('/contact',logger, (req, res) => {
   res.send('Contact Page!');
})

app.listen(3000, () => console.log(`Server listening on port: ${port}`));