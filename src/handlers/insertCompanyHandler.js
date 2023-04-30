const { insertCompanyService } = require('../services/insertCompanyService')

module.exports.insertCompany = async (event, context) => { 
    const { company_name, company_address, year_founded} = JSON.parse(event.body)

    const { result, statusCode } = await insertCompanyService(company_name, company_address, year_founded)

    return {
        body : result,
        statusCode : statusCode
    }
}