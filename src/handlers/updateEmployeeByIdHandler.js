const { updateEmployeeByIdService } = require('../services/employees/updateEmployeeByIdServices')

module.exports.updateEmployeeById = async (event, context) => {
    const { employee_id } = event.pathParameters
    const { employee_name, company_title, year_hired, birthdate, salary, image, team } = JSON.parse(event.body)
    
    const { result, statusCode } = await updateEmployeeByIdService(employee_id, employee_name, company_title, year_hired, birthdate, salary, image, team)

    return {
        body : result,
        statusCode : statusCode
    }
}