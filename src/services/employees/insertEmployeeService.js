const { databaseQuery } = require('../../middlewares/databaseQuery')

const Employee = require('../../models/Employee')

module.exports.insertEmployeeService = async (employee_name, company_title, year_hired, birthdate, salary, image, team) => {
    try{
        const employee = new Employee(null, employee_name, company_title, year_hired, birthdate, salary, image, team, null, null, false)

        console.log(employee)
        
        await databaseQuery(`INSERT INTO employees (employee_name, company_title, year_hired, salary, birthdate, image, team, archived) VALUES ('${employee.employee_name}', '${employee.company_title}', ${employee.year_hired}, ${employee.salary}, '${employee.birthdate}', '${employee.image}', ${employee.team}, false)`)
        
        return {
            result : JSON.stringify({
                message : 'Successfully created employee record'
            }),
            statusCode : 200
        }
    }catch(error){
        console.error('An error has occurred:', error)
        return{
            body : JSON.stringify({
                message : error
            }),
            statusCode: 400
        }
    }
}