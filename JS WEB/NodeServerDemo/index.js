const http = require('http');

const router = require('./router');

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const deleteController = require('./controllers/deleteController');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/catalog', catalogController);

router.post('/create', createController);
router.get('/delete', deleteController);

const port = 3000
const server = http.createServer(requestHandler);

function requestHandler(req,res){
    const url = new URL(req.url, 'http://localhost');
    
    console.log(">>> method: ", req.method);
    console.log(">>> url: ", req.url);
    
    const handler =  router.match(req.method,url.pathname);
   handler(req,res);
}

server.listen(port, () => console.log('Server listenning on port ' + port));