const express = require('express')
const app = express()
const port = 4000

const cors= require('cors')
const bodyParser = require('body-parser')
const monk = require('monk')
const url = "mongodb://clint:clintspassword@database-shard-00-00-6492m.mongodb.net:27017,database-shard-00-01-6492m.mongodb.net:27017,database-shard-00-02-6492m.mongodb.net:27017/recipes?ssl=true&replicaSet=DataBase-shard-0&authSource=admin&retryWrites=true"

const db = monk(url)
db.then(() =>{
    console.log("connected")
})

const recipes = db.get("recipes_Collection")
import {title} from '/src/components/CreateRecipe.js'
app.use(cors())
app.use(bodyParser.json())

app.get('/', async function(req, res){
    const results = await people.find()
    res.status(200).send(results)
})
app.post('.', async function(req, res){
    const results = await title.insert(req.body)
    res.status(200).send(results)
})
app.listen(port, () => console.log("App is listening on port ${port}!"))

