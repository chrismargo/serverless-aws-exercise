const { insertTeamService } = require('../services/team/insertTeamService')

module.exports.insertTeam = async (event, context) => {
    const { team_name, team_leader, company } = JSON.parse(event.body)

    const { result, statusCode } = await insertTeamService(team_name, team_leader, company)

    return {
        body : result,
        statusCode: statusCode
    }
}
