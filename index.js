var express = require('express')
var app = express()
var catRoutes = require('./routes/catRoutes')
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send("Hellooo")
})
app.get('/home',(req,res)=>{
    // res.send("My Home page")
    // console.log(__dirname);
    // res.sendFile(__dirname+"/home.html")
    res.render('home')
})
app.use('/category',catRoutes)
// app.get("/category",(req,res)=>{
//     res.render('category')
// })
app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/about.html")
})
app.listen(4000,()=>{
    console.log("Running 4000 port");  
})