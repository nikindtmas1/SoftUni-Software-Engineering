const express = require('express');
const app = express();
const port = 5000;

//const home = require('./views/home/index.html')
app.use('/static', express.static('static'));


app.get('/', (req,res)=> {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // });
   res.sendFile(__dirname + '/views/home/index.html')
});

app.get('/add-cat', (req, res) => {

    res.sendFile(__dirname + '/views/addCat.html')
});

app.get('/add-breed', (req, res) => {

    res.sendFile(__dirname + '/views/addBreed.html')
})

app.listen(port, () => console.log(`Server listening on port: ${port}...`))