const express = require ('express');

// expres invoke function
const app = express();

//listen for rqeuest

app.listen(3000);
app.get('/', (req,res)=>{
    //res.send('<p>lawrence</p>');
    res.sendFile('./views/index.html', { root:__dirname});
});

app.get('/about', (req,res)=>{
    res.sendFile('./views/about.html', { root:__dirname});
    //res.send('<p>lawrence about</p>');
});



//crash course tut #6