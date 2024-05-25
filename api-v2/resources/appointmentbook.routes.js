const express = require('express')
const rotas = express.Router() 
const controllers = require('./appointmentbook.controllers')

//get

rotas.get('/goalsandtasks',async (req,res)=>{ //requer req.body
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

rotas.post('/creategoalsandtasks',async (req,res)=>{
    const goalsandtasks = await controllers.createGoalOrTask(req.body)
    res.json(goalsandtasks)
})

rotas.post('/createcontacts',async (req,res)=>{
    const contacts = await controllers.createContact(req.body)
    res.json(contacts)
})

//patch

rotas.patch('/updategoalsandtasks:id',async (req,res)=>{
    const goalsandtasks = await controllers.updateGoalsAndTasks(req.params.id,req.body)
    res.json(goalsandtasks)

})

rotas.patch('/updatecontacts:id',async (req,res)=>{
    const contacts = await controllers.updateContacts(req.params.id,req.body)
    res.json(contacts)
})

rotas.patch('/updateschedule',async (req,res)=>{
    const schedule = await controllers.updateSchedule(req.body)
    res.json(schedule)
})

//delete

rotas.delete('/deletegoalsandtasks:id',async (req,res)=>{
    const goalsandtasks = await controllers.deleteGoalsAndTasks(req.params.id)
    res.json(goalsandtasks)
})

rotas.delete('/deletecontacts:id',async (req,res)=>{
    const contacts = await controllers.deleteContact(req.params.id)
    res.json(contacts)
})



module.exports = rotas