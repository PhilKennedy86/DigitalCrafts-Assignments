const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

let todos = []

//middleware
app.use(cors())
app.use(bodyParser.json())

//Adds entry to activity array
app.post('/todos',(req,res) => {
    //Assigning user entry to variables
    let activityName = req.body.activityName
    let activityPriority = req.body.activityPriority
    //Creating the "todo" object
    let todo = {nane: activityName, priority: activityPriority}    
    //Adding "todo" to array
    todos.push(todo)
    res.send('Activity Added!')
})

//Prints the current full activity array
app.get('/todos',(req,res) => {
    res.json(todos)
})

//Starts the express Node serv
app.listen(3000,() => {
    console.log('Server is running...')
})