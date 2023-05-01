const { databaseQuery } = require('../middlewares/databaseQuery')

const Company = require('../models/Company')


module.exports.updateCompanyByIdService = async (company_id, company_name, company_address, year_founded) => {
    try{
        const company = new Company(company_id, company_name, company_address, year_founded, null, null, false)
    
        await databaseQuery(`UPDATE companies SET company_name = '${company.company_name}', company_address = '${company.company_address}', year_founded = ${company.year_founded}, modified_at = CURRENT_TIMESTAMP WHERE company_id = ${company.id}`)

        return {
            result : JSON.stringify({
                message : `Successfully updated company with company Id ${company.company_id}`
            }),
            statusCode : 200
        }
    } catch(error){
        console.error('Error updating company:', error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
}