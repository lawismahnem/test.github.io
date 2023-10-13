const express = require ('express');

// expres invoke function
const app = express();

app.set('view engine', 'ejs');

//listen for rqeuest

app.listen(3000);
app.get('/', (req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    //res.send('<p>lawrence</p>');
    //res.sendFile('./views/index.html', { root:__dirname});
    res.render('index', { title: 'Lawrence', blogs});
});

app.get('/about', (req,res)=>{
    //res.sendFile('./views/about.html', { root:__dirname});
    //res.send('<p>lawrence about</p>');
    res.render('about', { title: 'about'});
});

app.get('/blogs/create', (req,res) =>{
   res.render('create', { title: 'create'});
   
});

app.use((req,res) => {
    res.status(404).render('404', { title: '404'});

})
//crash course tut #6