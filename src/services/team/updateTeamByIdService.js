const { databaseQuery } = require('../../middlewares/databaseQuery')

const Team = require('../../models/Team')

module.exports.updateTeamByIdService = async (team_id, team_name, team_leader, company) => {
    try{
        const team = new Team(team_id, team_name, team_leader, company, null, null, false)
        await databaseQuery(`UPDATE team SET team_name = '${team.team_name}', team_leader = '${team.team_leader}', company = ${team.company}, modified_at = CURRENT_TIMESTAMP WHERE team_id = ${team.team_id}`)
        return {
            result : JSON.stringify({
                message : 'Successfully edited team record'
            }),
            statusCode : 200
        }
    }catch(error){
        console.error(`Error has occurred:`, error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
}