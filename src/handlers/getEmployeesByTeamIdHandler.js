const { getEmployeesByTeamIdService } = require('../services/employees/getEmployeesByTeamIdService')

module.exports.getEmployeesByTeamId = async (event, context) => {
    const { team_id } = event.pathParameters
    const { result, statusCode } = await getEmployeesByTeamIdService(team_id)

    return {
        body : result,
        statusCode : statusCode
    }
}