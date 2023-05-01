const { getEmployeesByCompanyIdService } = require('../services/employees/getEmployeesByCompanyIdService')

module.exports.getEmployeesByCompanyId = async (event, context) => {
    const { company_id } = event.pathParameters
    const { result, statusCode } = await getEmployeesByCompanyIdService(company_id)

    return {
        body : result,
        statusCode : statusCode
    }
}