const express = require('express')     
const app = express()
var empRoutes = require('./routes/empRoutes')
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use('/emp',empRoutes)
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.send("Home page...")
})
app.listen(4000,()=>{
    console.log("Listening on 4000 port --");
})