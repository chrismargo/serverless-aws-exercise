const { getCompanyByIdService } = require('../services/getCompanyByIdService')

module.exports.getCompanyById = async (event, context) => {
    const company_id = event.pathParameters
    const { result, statusCode } = await getCompanyByIdService(company_id)

    return { 
        result : result,
        statusCode : statusCode
    }
}