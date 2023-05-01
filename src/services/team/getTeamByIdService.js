const { databaseQuery } = require('../../middlewares/databaseQuery')

const Team = require('../../models/Team')

module.exports.getTeamByIdService = async (team_id) => {
    try{

        const team = new Team(team_id, null, null, null, null, null, false)
        const response = await databaseQuery(`SELECT * FROM team WHERE team_id = ${team.team_id}`)

        return {
            result : JSON.stringify({
                result : response.rows
            }),
            statusCode : 200
        }
    }catch(error){
        console.error('Error has occurred:', error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
}