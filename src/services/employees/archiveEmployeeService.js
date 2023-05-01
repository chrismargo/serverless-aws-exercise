const { databaseQuery } = require('../../middlewares/databaseQuery')

module.exports.archiveEmployeeService = async (employee_id) => {
    try{
        await databaseQuery(`UPDATE employees SET archived = true WHERE employee_id = ${employee_id}`)

        return {
            result : JSON.stringify({
                message : 'Successfully archived employee record'
            }),
            statusCode: 200
        }
    }catch(error){
        console.error('An error has occurred:', error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
}