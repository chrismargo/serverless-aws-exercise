const { getTeamByIdService } = require('../services/team/getTeamByIdService')

module.exports.getTeamById = async (event, context) => {
    const { team_id } = event.pathParameters
    const { result, statusCode } = await getTeamByIdService(team_id)

    return {
        body : result,
        statusCode : statusCode
    }
}