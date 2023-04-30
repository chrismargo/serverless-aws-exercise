const ServerlessClient = require('serverless-postgres')

const { config } = require('../config')
/*
try{
    var client = new ServerlessClient({
        user: config.PG_DATABASE_USER,
        host: config.PG_DATABASE_HOST,
        database: config.PG_DATABASE_NAME,
        password: config.PG_DATABASE_PASSWORD,
        port: config.PG_DATABASE_PORT,
        debug: true,
        delayMs: 3000
    })
}catch(error){
    console.log(`${error}`)
}
*/
const client = new ServerlessClient({
    user: config.PG_DATABASE_USER,
    host: config.PG_DATABASE_HOST,
    database: config.PG_DATABASE_NAME,
    password: config.PG_DATABASE_PASSWORD,
    port: config.PG_DATABASE_PORT,
    debug: true,
    delayMs: 3000
})

module.exports = { client }