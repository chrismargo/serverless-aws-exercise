const { getTeamsByCompanyIdService } = require('../services/team/getTeamsByCompanyIdService')

module.exports.getTeamsByCompanyId = async (event, context) => {
    const { company_id } = event.pathParameters
    const { result, statusCode } = await getTeamsByCompanyIdService(company_id)

    return {
        body: result,
        statusCode: statusCode
    }
}