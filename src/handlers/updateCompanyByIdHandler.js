const { updateCompanyByIdService } = require('../services/companies/updateCompanyByIdService')

module.exports.updateCompanyById = async (event, context) => {
    const { company_id } = event.pathParameters
    const { company_name, company_address, year_founded } = JSON.parse(event.body)

    const { result, statusCode } = await updateCompanyByIdService(company_id, company_name, company_address, year_founded)

    return {
        body: result,
        statusCode : statusCode
    }

}