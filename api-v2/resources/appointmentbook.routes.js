const express = require('express')
const rotas = express.Router() 
const controllers = require('./appointmentbook.controllers')

//get

rotas.post('/getgoalsandtasks',async (req,res)=>{ //requer req.body
    console.log(req.body)
    const weekgoalsandtasks = await controllers.getWeekGoalsAndTasks(req.body)
    res.json(weekgoalsandtasks)

})

rotas.get('/schedule',async (req,res)=>{
    const schedule = await controllers.getSchedule()
    res.json(schedule)

})

rotas.get('/contacts',async (req,res)=>{
    const contacts = await controllers.getContacts()
    res.json(contacts)
})

//post

rotas.post('/goalsandtasks',async (req,res)=>{
    const goalsandtasks = await controllers.createGoalOrTask(req.body)
    res.json(goalsandtasks)
})

rotas.post('/contacts',async (req,res)=>{
    const contacts = await controllers.createContact(req.body)
    res.json(contacts)
})

//patch

rotas.patch('/goalsandtasks;:id',async (req,res)=>{
    const goalsandtasks = await controllers.updateGoalsAndTasks(req.params.id,req.body)
    res.json(goalsandtasks)

})

rotas.patch('/contacts;:id',async (req,res)=>{
    const contacts = await controllers.updateContacts(req.params.id,req.body)
    res.json(contacts)
})

rotas.patch('/schedule',async (req,res)=>{
    const schedule = await controllers.updateSchedule(req.body)
    res.json(schedule)
})

//delete

rotas.delete('/goalsandtasks;:id',async (req,res)=>{
    const goalsandtasks = await controllers.deleteGoalsAndTasks(req.params.id)
    res.json(goalsandtasks)
})

rotas.delete('/contacts;:id',async (req,res)=>{
    const contacts = await controllers.deleteContact(req.params.id)
    res.json(contacts)
})



module.exports = rotas