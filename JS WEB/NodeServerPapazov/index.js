const http = require('http');

const port = 3000;

function requestHandler(req, res){
    if(req.url === '/'){
        res.write('Hello Node!');
    }else if(req.url == '/catalog'){
        res.write('Catalog Page');
    }
    
    res.end();
    console.log(`Server listening on port ${port}`);
}

 const app = http.createServer(requestHandler);
    app.listen(3000);
