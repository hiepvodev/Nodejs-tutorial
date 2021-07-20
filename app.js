const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
// const Blog = require('./models/blogs')
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express()

//connect to mongo  db
const dbURI = 'mongodb+srv://hiep:test1234@cluster0.7zlwa.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    //listen for request
    app.listen(3000)
})
.catch((err) => {
    console.log(err);
})
//register view engine
app.set('view engine', 'ejs')



//middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//mongoose and mongo sanbox routes
// app.get('/add-blogs', (req, res) => {
//     const blog = new Blog({
//         title: 'new Blog 2',
//         snippet: 'about my new blog 2',
//         body: 'more blog my new blog 2'
//     })

//     blog.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

// app.get('/single-blogs', (req, res) => {
//     Blog.findById('60f4f7ac08402c605e41b885')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })


app.get('/', function (req, res) {
    res.redirect('/blogs')
})

app.get('/about', function (req, res) {
    res.render('about',{ title: 'About'})
})

//blog routes
app.use('/blogs',blogRoutes)


