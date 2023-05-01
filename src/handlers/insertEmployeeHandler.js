const { insertEmployeeService } = require('../services/employees/insertEmployeeService')

module.exports.insertEmployee = async (event, context) => {
    const { employee_name, company_title, year_hired, birthdate, salary, image, team } = JSON.parse(event.body)
    const { result, statusCode } = await insertEmployeeService(employee_name, company_title, year_hired, birthdate, salary, image, team)

    return {
        body : result,
        statusCode : statusCode
    }
}