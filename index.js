//core module
const {add,minus} = require('./calc')
const http = require('http')
http.createServer((req,res)=>{
    // res.sendFile("Hellooo")
    res.write("Hello 123ws wertuyr weruw")
    add(45,20)
    minus(10,4)
    // res.write("<br> Addition is "+add(20,5))
    // res.write("<br> Minus is "+minus(20,10))
    res.end("end..")
}).listen(4000,()=>{
    console.log("Listening on 4000 port...")
})

