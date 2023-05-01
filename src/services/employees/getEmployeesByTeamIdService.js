const { databaseQuery } = require('../../middlewares/databaseQuery')

const Employee = require('../../models/Employee')

module.exports.getEmployeesByTeamIdService = async (team_id) => {
    try{
        const response = await databaseQuery(`SELECT employees.* FROM team JOIN employees ON team.team_id = employees.team WHERE team.team_id = ${team_id}`)
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