const { databaseQuery } = require('../../middlewares/databaseQuery')

const Employee = require('../../models/Employee')

module.exports.getEmployeesByCompanyIdService = async (company_id) => {
    try{
        const response = await databaseQuery(`SELECT employees.* FROM employees JOIN team ON employees.team = team.team_id JOIN companies ON team.company = companies.company_id WHERE companies.company_id = ${company_id}`)

        const employees = response.rows.map((item) => {
            const employee = new Employee(item.employee_id, item.employee_name, item.company_title, item.year_hired, item.birthdate, item.salary, item.image, item.team, item.created_at, item.modified_at, item.archived)

            return employee
        })
        return {
            result : JSON.stringify({
                result : employees
            }),
            statusCode : 200
        }
    }catch(error){
        console.error('An error has occurred:', error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode: 400
        }
    }
}