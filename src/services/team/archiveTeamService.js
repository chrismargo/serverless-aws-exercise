const { databaseQuery } = require('../../middlewares/databaseQuery')

const Team = require('../../models/Team')

module.exports.archiveTeamService = async(team_id) => {
    try{
        
        await databaseQuery(`UPDATE team SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE team_id = ${team_id}`)
        
        return {
            result : JSON.stringify({
                message : 'Successfully archived team record'
            }),
            statusCode : 200
        }
    }catch(error){
        console.error('Error has occurred:', error)
        return {
            body : JSON.stringify({
                message: error
            }),
            statusCode : 400
        }
    }
}