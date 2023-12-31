const http = require('http');
const fs = require('fs');
const _ = require('lodash');
//lawrence
const server = http.createServer((req,res) => {
    //lodash 

    const num =_.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();
    res.setHeader('Contet-Type','text/html');
    //res.write('<p>hello, <b>lawrence</b></p>');

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if (err){
            res.end(err);
        }else{
            res.end(data);
        }
    })
});

server.listen(3000,'localhost', () => {
    console.log('listening for request on port 3000')
});