const { databaseQuery } = require('../../middlewares/databaseQuery')

const Company =  require('../../models/Team')

module.exports.getTeamsByCompanyId = async (company_id) => {
    try{
        const company = new Company(company_id, null, null, null, null, null, false)

        const response = await databaseQuery(`SELECT * FROM team WHERE companies = ${company.company_id}`)
        
        return {
            result : JSON.stringify({
                result : response.rows
            }),
            statusCode: 200
        }
    }catch(error){
        console.error('Error has occurred:', error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode: 400
        }
    }
}