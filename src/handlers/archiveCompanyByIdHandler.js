const { archiveCompanyByIdService } = require('../services/archiveCompanyByIdService')

module.exports.archiveCompanyById = async (event, context) => {
    const { company_id } = event.pathParameters

    const { result, statusCode } = await archiveCompanyByIdService(company_id)

    return {
        body: result,
        statusCode: statusCode
    }
}