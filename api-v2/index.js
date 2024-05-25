const express = require('express')
const rotas = require('./resources/appointmentbook.routes')
const porta = process.env.PORT || 3000
const app = express()

// app.use('/', rotas) //usa o modulo rotas partindo da rota raiz '/'


app.use('/', rotas)

app.get('*',(req,res)=>{
    res.send('abobrinha')
})

app.listen(porta ,()=>{console.log('servidor rodando')})

// (async ()=>{
//     const db = require('./db')
    // console.log('Obter todos os goals e tasks')
    // const weekGoalsAndTasks = await db.getWeekGoalsAndTasks({data1:"2024-05-20",data2:"2024-05-26"})
    // console.log(weekGoalsAndTasks)
    // console.log('Obter schedule')
    // const schedule = await db.getSchedule()
    // console.log(schedule)
    // console.log('Obter contatos')
    // const contacts = await db.getContacts()
    // console.log(contacts)
    // console.log('Inserir task')
    // const newTask = await db.createGoalOrTask({dsc:"dever de casa",typenum:2,acc:false,dt:"2024-05-24"})
    // console.log(newTask)
    // console.log('Inserir contato')
    // const newContact = await db.createContact({nomectt:"teste1",vinculo:"teste1",disciplina:"teste1",email:"teste1",telefone:"teste1",sitectt:"teste1",instituicao:"teste1"})
    // console.log(newContact)
    // console.log('Atualizar contato')
    // const updatedContact = await db.updateContacts(18,{nomectt:"teste1update",vinculo:"teste1",disciplina:"teste1",email:"teste1",telefone:"teste1",sitectt:"teste1",instituicao:"teste1"})
    // console.log(updatedContact)
    // console.log('Atualizar Task')
    // const updatedTask = await db.updateGoalsAndTasks(18,{campo:"acc",entrada:"false"})
    // console.log(updatedTask)
    // console.log('Atualizar Schedule')
    // const updateSchedule = await db.updateSchedule({newActivity:"Lavar cabelo",dayweek:2,scperiod:3})
    // console.log(updateSchedule)
    // console.log('Deletar Task')
    // const deleteTask = await db.deleteGoalsAndTasks(40)
    // console.log(deleteTask)
    // console.log('Deletar contact')
    // const deleteContact = await db.deleteContact(18)
    // console.log(deleteContact)


// })()


