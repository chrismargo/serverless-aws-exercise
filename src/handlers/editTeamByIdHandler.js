const { editTeamByIdService } = require('../services/team/editTeamByIdService')

module.exports.editTeamById = async (event, context) => {
    const { team_id } = event.pathParameters
    const { team_name, team_leader, company } = JSON.parse(event.body)

    const { result, statusCode } = await editTeamByIdService(team_id, team_name, team_leader, company)
    
    return {
        body : result,
        statusCode : statusCode
    }
}