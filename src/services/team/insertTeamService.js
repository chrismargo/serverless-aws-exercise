const { databaseQuery } = require('../../middlewares/databaseQuery')

const Team = require('../../models/Team')

module.exports.insertTeamService = async(team_name, team_leader, company) => {
    try{
        const team = new Team(null, team_name, team_leader, company, null, null, false)

        await databaseQuery(`INSERT INTO team (team_name, team_leader, company, archived) VALUES ('${team.team_name}', '${team.team_leader}', ${team.company}, false)`)

        return {
            result : JSON.stringify({
                message : 'Successfully added team record'
            }),
            statusCode: 200
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