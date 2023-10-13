const express = require ('express');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const Blog = require ('./models/blog');
// expres invoke function


const app = express();

//connection to mongodb
const dbURI ='mongodb+srv://lawrence:lawrence321@cluster0.t2pet5h.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err))
app.set('view engine', 'ejs');

//listen for rqeuest

// midware & static files

app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/add-blog', (req,res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my blog lawrence',
        body: 'more about my blog x lawrence'
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })

})

app.get('/all-blog', (req,res) => {
    Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

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