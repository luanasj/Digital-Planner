const db = require('../db')

/*Get*/

const getWeekGoalsAndTasks = async (datas)=>{
    const con = await db.conectar()
    const {data1,data2} = datas
    const sql = "call goalsAnsTasksSelect(?,?);"
    const [linhas] = await con.query(sql,[data1,data2])
    return await linhas
}

const getSchedule = async ()=>{
    const con = await db.conectar()
    let sql = "select * from schedule;";
    const [linhas] = await con.query(sql)
    return await linhas
}

const getContacts = async ()=>{
    const con = await db.conectar()
    let sql = "select * from contacts;";
    const [linhas] = await con.query(sql)
    return await linhas
}

/*Post*/

const createGoalOrTask = async (task) =>{
    const con = await db.conectar()
    const {dsc,typenum,acc,dt} = task
    let sql = "call goalsAndTasksInsert(?,?,?,?);"
    return await con.query(sql, [dsc,typenum,acc,dt]);

}

const createContact = async (contact) =>{
    const con = await db.conectar()
    const {nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao} = contact
    let sql = "call insertContacts(?,?,?,?,?,?,?);"
    return await con.query(sql, [nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao]);

}

/*Patch*/

const updateContacts = async (id,info)=>{
    const con = await db.conectar()
    const {nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao} = info
    const sql = "call contactsUpdate(?,?,?,?,?,?,?,?);"  
    return await con.query(sql,[id,nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao])
}

const updateGoalsAndTasks = async (id,info) =>{
    const con = await db.conectar()
    const {campo,entrada} = info //campo must be "description" or "acc" && entrada must be a string
    const sql = "call goalsAndTasksUpdate(?,?,?);"
    return await con.query(sql,[campo,entrada,id])

}

const updateSchedule = async (info)=>{
    const con = await db.conectar()
    const {newActivity,dayweek,scperiod} = info
    const sql = "call scheduleUpdate(?,?,?);"
    return await con.query(sql,[newActivity,dayweek,scperiod])
}

/*Delete*/

const deleteGoalsAndTasks = async (id)=>{
    const con = await db.conectar()
    const sql = "call goalsAndTasksDelete(?)"
    return await con.query(sql,id)

}


const deleteContact = async (id)=>{
    const con = await db.conectar()
    const sql = "call contactsDelete(?)"
    return await con.query(sql,id)
}





module.exports = {getWeekGoalsAndTasks,getSchedule,getContacts,createGoalOrTask,createContact,updateContacts,updateGoalsAndTasks,updateSchedule,deleteGoalsAndTasks,deleteContact}