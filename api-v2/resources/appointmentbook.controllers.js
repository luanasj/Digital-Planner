const db = require('../dbconnection/db')

/*Get*/

const getWeekGoalsAndTasks = async (datas)=>{
    try{
        const con = await db.conectar()
        if(!datas){
            throw new Error("information missing")
        }
        const {data1,data2} = datas
        const sql = "call goalsAnsTasksSelect(?,?);"
        const [linhas] = await con.query(sql,[data1,data2])
        return await linhas
    }catch(e){
        const erro = `erro: ${e}`
        return erro
    }
    
}

const getSchedule = async ()=>{
    try{
        const con = await db.conectar()
        let sql = "select * from schedule;";
        const [linhas] = await con.query(sql)
        return await linhas
    }catch(e){
        const erro = `erro: ${e}`
        return erro
    }
    
}

const getContacts = async (i)=>{
    try{
        const con = await db.conectar()
        let sql = "call contactsSelect(?);";
        const [linhas] = await con.query(sql,i)
        return await linhas
    }catch(e){
        const erro = `erro: ${e}`
        return erro
    }
    
}

const getContactsCount = async () => {
    try {
        const con = await db.conectar()
        let sql = "select count(*) as total from contacts;"
        const [linhas] = await con.query(sql)
        return linhas[0].total
        } catch (error) {
        return error
    }
    
}

/*Post*/

const createGoalOrTask = async (task) =>{
    try{
        const con = await db.conectar()
        if(!task){
            throw new Error("information missing")
        }
        const {dsc,typenum,acc,dt} = task
        let sql = "call goalsAndTasksInsert(?,?,?,?);"
        return await con.query(sql, [dsc,typenum,acc,dt]);
    }catch(e){
        const erro = `erro: ${e}`
        return erro
    }

    

}

const createContact = async (contact) =>{
    try {
        const con = await db.conectar()
        if(!contact){
            throw new Error("information missing")
        }
        if (!contact.nomectt){
            throw new Error("Name is required")
        }
        const {nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao} = contact
        let sql = "call insertContacts(?,?,?,?,?,?,?);"
        return await con.query(sql, [nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao]);
    } catch (e) {
        const erro = `erro: ${e}`
        return erro
    }
    
}

const contactsSearch = async (info)=>{
    try {
        const con = await db.conectar()
        const {col,searchstr} = info
        const sql = "call contactsSearch(?,?);"
        const [linhas] = await con.query(sql,[col,searchstr])
        console.log(info) 
        console.log(linhas)
        return linhas

    } catch (error) {
        return error
    }
}

/*Patch*/

const updateContacts = async (id,info)=>{
    try {
        const con = await db.conectar()
        if(!info){
            throw new Error("information missing")
        }
        if(!id){
            throw new Error("id missing")
        }
        const {nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao} = info
        const sql = "call contactsUpdate(?,?,?,?,?,?,?,?);"  
        return await con.query(sql,[id,nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao])
    } catch (e) {
        
    }

    
}

const updateGoalsAndTasks = async (id,info) =>{
    try {
        const con = await db.conectar()
        if(!info){
            throw new Error("information missing")
        }
        if(!id){
            throw new Error("id missing")
        }
        const {campo,entrada} = info //campo must be "description" or "acc" && entrada must be a string
        const sql = "call goalsAndTasksUpdate(?,?,?);"
        return await con.query(sql,[campo,entrada,id])
    } catch (e) {
        const erro = `erro: ${e}`
        return erro
    }
    

}

const updateSchedule = async (info)=>{
    try {
        const con = await db.conectar()
        if(!info){
            throw new Error("information missing")
        }
        const {newActivity,dayweek,scperiod} = info
        const sql = "call scheduleUpdate(?,?,?);"
        return await con.query(sql,[newActivity,dayweek,scperiod])
    } catch (e) {
        const erro = `erro: ${e}`
        return erro
    }
   
}

/*Delete*/

const deleteGoalsAndTasks = async (id)=>{
    try {
        if(!id){
            throw new Error("id missing")
        }
        const con = await db.conectar()
        const sql = "call goalsAndTasksDelete(?)"
        return await con.query(sql,id)
    } catch (e) {
        const erro = `erro: ${e}`
        return erro   
    }

}


const deleteContact = async (id)=>{
    try {
        if(!id){
            throw new Error("id missing")
        }
        const con = await db.conectar()
        const sql = "call contactsDelete(?)"
        return await con.query(sql,id)
    } catch (e) {
        const erro = `erro: ${e}`
        return erro   
    }
}





module.exports = {getWeekGoalsAndTasks,getSchedule,getContacts,createGoalOrTask,createContact,updateContacts,updateGoalsAndTasks,updateSchedule,deleteGoalsAndTasks,deleteContact,getContactsCount,contactsSearch}