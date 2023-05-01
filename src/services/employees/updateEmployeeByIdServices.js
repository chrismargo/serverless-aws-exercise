const { databaseQuery } = require('../../middlewares/databaseQuery')

const Employee = require('../../models/Employee')

module.exports.updateEmployeeByIdService = async (employee_id, employee_name, company_title, year_hired, birthdate, salary, image, team) => {
    try{
        const employee = new Employee(employee_id, employee_name, company_title, year_hired, birthdate, salary, image, team, null, null, false)
        
        await databaseQuery(`UPDATE employees SET employee_name = '${employee.employee_name}', company_title = '${employee.company_title}', year_hired = ${employee.year_hired}, salary = ${employee.salary}, birthdate = '${employee.birthdate}', image = '${employee.image}', team = ${employee.team}, modified_at = CURRENT_TIMESTAMP WHERE employee_id = ${employee.employee_id}`)
        return {
            result : JSON.stringify({
                message : 'Successfully updated employee record'
            }),
            statusCode : 200
        }
    }catch(error){
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode: 400
        }
    }
}