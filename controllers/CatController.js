const main = require('../models/CategoryModel')
const add = async(req,res)=>{
    let data = req.body
    let connection = await main()
    let db = connection.db
    let collection = db.collection('category') 
    let result = await collection.insertOne(data)
    if(result){
        res.redirect("/category")
    }

}
const disp = async(req,res)=>{
    //get data from db
    let connection = await main()
    let db = connection.db
    let collection = db.collection('category') 
    let data = await collection.find({}).toArray()
    res.render('category',{
        catdata:data
    })

}
module.exports = {add,disp}