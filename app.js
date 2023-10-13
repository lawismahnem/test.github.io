const express = require ('express');

// expres invoke function
const app = express();

app.set('view engine', 'ejs');

//listen for rqeuest

app.listen(3000);
app.get('/', (req,res)=>{
    //res.send('<p>lawrence</p>');
    //res.sendFile('./views/index.html', { root:__dirname});
    res.render('index');
});

app.get('/about', (req,res)=>{
    //res.sendFile('./views/about.html', { root:__dirname});
    //res.send('<p>lawrence about</p>');
    res.render('about');
});

app.get('/blogs/create', (req,res) =>{
   res.render('create');
   
});

app.use((req,res) => {
    res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.render('404');
})
//crash course tut #6