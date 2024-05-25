const conectar = async ()=>{
    if(global.connection && global.connection.state != 'disconected')
        return  global.connection
    const mysql = require('mysql2/promise')
    const con=mysql.createPool("mysql://root:LADYbieber63@localhost:3306/appointmentbook")
    console.log('Conectou ao banco')
    global.connection = con
    return con
}

module.exports = {conectar}