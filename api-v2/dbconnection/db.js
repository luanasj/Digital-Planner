const dotenv = require('dotenv').config()
const {MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE,MYSQL_PORT} = process.env

const conectar = async ()=>{
    if(global.connection && global.connection.state != 'disconected')
        return  global.connection
    const mysql = require('mysql2/promise')
    const con=mysql.createPool(`mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DATABASE}`)
    console.log('Conectou ao banco')
    global.connection = con
    return con
}

module.exports = {conectar}