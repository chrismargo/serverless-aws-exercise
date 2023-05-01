const { getCompanyByIdService } = require('../services/companies/getCompanyByIdService')

module.exports.getCompanyById = async (event, context) => {
    const { company_id } = event.pathParameters
    const { result, statusCode } = await getCompanyByIdService(company_id)

    return { 
        body : result,
        statusCode : statusCode
    }
}