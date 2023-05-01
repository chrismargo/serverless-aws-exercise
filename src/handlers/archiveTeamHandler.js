const { archiveTeamService } = require('../services/team/archiveTeamService')

module.exports.archiveTeam = async (event, body) => {
    const { team_id } = event.pathParameters
    const { result, statusCode } = await archiveTeamService(team_id)

    return {
        body : result,
        statusCode : statusCode
    }
}