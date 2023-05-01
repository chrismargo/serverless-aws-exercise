const { databaseQuery } = require('../middlewares/databaseQuery')

const Company = require('../models/Company')


module.exports.archiveCompanyByIdService = async (company_id) => {

    try{
        const company = new Company(company_id, null, null, null, null, null, null)


        const company_response = await databaseQuery(`UPDATE companies SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE company_id = ${company.company_id}`)

        const team_response = await databaseQuery(`UPDATE team SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE company = ${company.company_id}`)

        const employee_result = await databaseQuery(`SELECT employees.employee_id FROM team JOIN employees ON team.team_id = employees.team JOIN companies ON team.company = companies.company_id WHERE companies.company_id = ${company.company_id}`)

        employee_result.rows.forEach(async (row) => {
            console.log(row.employee_id)
            await databaseQuery(`UPDATE employees SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE employee_id = ${row.employee_id}`)
          })

        return {
            result : JSON.stringify({
                message : `Sucessfully archived company entry with company id ${company.company_id}`
            }),
            statusCode: 200
        }


    }catch(error){
        console.error('Error has occurred:', error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
}