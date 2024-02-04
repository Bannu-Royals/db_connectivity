const express = require("express")
const {MongoClient} = require("mongodb")
const bodyparser = require("body-parser")
const cors = require("cors")
const PORT = 8080

const app = express()
app.use(cors())
app.use(bodyparser.json())

const mongodbURI ="mongodb+srv://durgaprasadkakileti:bannu1703@cluster0.ubmijm4.mongodb.net/"
const databaseName = "Cluster0"

const dbconnection = new MongoClient(mongodbURI,{useNewUrlParser:true,useUnifiedTopology:true})

dbconnection.connect()
    .then(()=>{
        console.log(`Connected to the MONGO-DB`)

        const database = dbconnection.db(databaseName)
        const formDataCollection = database.collection("reactFormData")

        app.post('/add',async(req,res)=>{
            const {name,email,phone} = req.body


            try{
             await formDataCollection.insertOne({name,email,phone})

                console.log("Data Send to mongodb")
                res.send("Success")
            } catch(error){
                console.log("Error",error)
            }
        })

    })

app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`)
})